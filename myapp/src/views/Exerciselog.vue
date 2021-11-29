<template>
<div class="container">
        <div class="columns">
            <div class="column">
                <Header />
                <br><br>
                <!-- time -->
                <div>
                    <p>Record your exercise time</p>
                        <input class="input exerice_time inputlog" type="number" placeholder="hours" v-model="exerciselog.hours">
                        <input class="input exerice_time inputlog" type="number" placeholder="minutes" v-model="exerciselog.minutes">
                        <input class="input exercise_title" style="margin-left:20px;" type="date" placeholder="hours" v-model="exerciselog.time">
                </div>
                <br>
                <!-- submit -->
                <button class="button is-success" @click="submitlog()" style="position:fixed; top:100px; right:200px;">Submit</button>
                <!-- weight/height -->
                <div>
                    <p>Record your Weight and Height</p>
                        <input class="input weight inputlog" placeholder="weight" v-model="exerciselog.weight"><span>lbs</span>
                        <input class="input weight inputlog" placeholder="height" v-model="exerciselog.height"><span>ft</span>
                </div>
                <br>
                <!-- title -->
                <div>
                    <p class="control has-icons-left">
                    <input class="input exercise_title inputlog" type="text" placeholder="Insert the exercise title" v-model="exerciselog.title">
                    <span class="icon is-small is-left">
                        <i class="fas fa-pencil-alt"></i>
                    </span>
                    </p>
                </div>
                <br>
                <!-- Exercise part -->
                <div>
                    <div v-for="(find,index) in exerciselog.finds" :key="index">
                        <input class="input exercise_part" type="text" placeholder="Insert the exercise name" v-model="find.name">
                            <div class="select is-normal">
                            <select v-model="find.type">
                                <option>Select Category</option>
                                <option disabled>Strength training</option>
                                <option>Chest</option>
                                <option>Back</option>
                                <option>Legs</option>
                                <option>Shoulder</option>
                                <option>trapezius muscle</option>
                                <option>biceps</option>
                                <option>triceps</option>
                                <option>Calves</option>
                                <option>Forearm</option>
                                <option>Hip</option>
                                <option>Abdomen</option>
                                <option disabled>Aerobic Training</option>
                                <option>Aerobic Training</option>
                                <option disabled>Stretching</option>
                                <option>Stretching</option>
                            </select>
                            </div>
                            <button class="button is-success addbutton" @click="add()">
                                <i class="fas fa-plus"></i>
                            </button>
                            <button class="button is-danger subbutton" @click="sub(index)">
                                <i class="fas fa-minus"></i>
                            </button>
                    </div>
                    
                </div>
            </div>
        </div>
       
    </div>
</template>

<script>
import Header from "../components/Header.vue";
import Session from "../services/session";
import { Add } from "../services/exercise";

export default {
    components: {
        Header
    },
    data() {
        return {
            Session,
            exerciselog: {
                user_handle: Session.user.handle,
                hours: null,
                minutes: null,
                weight: null,
                height: null,
                title: null,
                finds:[{name: '', type: ''}],
                time: null
            }
        }
    },
    methods:{
        add() {
            this.exerciselog.finds.push({name: '', type: '' });
        },
        sub(index) {
            if(this.exerciselog.finds.length != 1){
                this.exerciselog.finds.splice(index, 1);
            }
        },
        submitlog() {
            Add(this.exerciselog);
            this.exerciselog = {user_handle: Session.user.handle, finds:[{name: '', type: ''}]};
        }
    }
}
</script>

<style>
.exercise_title{
    width: 350px;
}
.exerice_time{
    width:100px;
    height:30px;
}
.inputlog{
    border-color: lightgrey
}
.weight {
    width: 350px;
    height:25px;
}
.exercise_part {
    width: 350px;
}
</style>