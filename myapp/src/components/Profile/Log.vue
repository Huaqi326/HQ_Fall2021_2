<template>
<div class="container">
    <div class="columns is-multiline">
        <!-- Exercise time -->
        <div class="column is-half">
                <table class="graph">
                <strong>Total Exercise Time</strong>
                <thead>
                <tr>
                    <th scope="col">Date</th>
                    <th scope="col">Percent</th>
                </tr>
            </thead><tbody>
                <tr v-for="(a,b) in data" :key="b" :style="{height: (this.data[b].hours*60 + this.data[b].minutes) + '%'}">
                    <th scope="row">{{this.data[b].time}}</th>
                    <td><span>{{this.data[b].hours*60 + this.data[b].minutes}}min</span></td>
                </tr>
            </tbody>
            </table>
        </div>
        <!-- Weight -->
        <div class="column is-half">
            <table class="table">
                <strong> Weight Compare</strong>
                <tbody>
                    <tr v-for="(a,b) in data" :key="b">
                        <th scope="row">{{this.data[b].time}}</th>
                        <td><span>{{this.data[b].weight}}</span></td>
                    </tr>
                </tbody>
            </table>
        </div>
        <!-- Exercise Compare -->
        <div class="column compare">
            <table>
                <strong>Exercise Compare</strong>
               <tbody>
                <tr v-for="(a,b) in data" :key="b">
                    <th>{{this.data[b].time}}</th>
                    <th v-for="(c,d) in data[b].finds" :key="d" scope="row">{{this.data[b].finds[d].name}}
                    <td><span>{{this.data[b].finds[d].type}}</span></td>
                    </th>
                </tr>
            </tbody>
            </table>
        </div>
    </div>
  </div>
</template>

<script>
import { GetByHandle } from '../../services/exercise';
import Session from '../../services/session';

export default {
    data() {
        return {
            Session,
            data: []
        }
    },
    async mounted() {
        this.data = await GetByHandle(Session.user.handle);
    }
}
</script>

<style>
.graph {
            margin-bottom:1em;
            font:normal 100%/100% arial,helvetica,sans-serif;
        }

        .graph caption {
            font:bold 150%/100% arial,helvetica,sans-serif;
            padding-bottom:0.33em;
        }

        .graph tbody th {
            text-align:right;
        }

        @supports (display:grid) {
            @media (min-width:32em) {
                .graph {
                    display:block;
                    width:600px;
                    height:300px;
                }

                .graph caption {
                    display:block;
                }

                .graph thead {
                    display:none;
                }

                .graph tbody {
                    position:relative;
                    display:grid;
                    grid-template-columns:repeat(auto-fit, minmax(2em, 1fr));
                    column-gap:2.5%;
                    align-items:end;
                    height:100%;
                    margin:3em 0 1em 2.8em;
                    padding:0 1em;
                    border-bottom:2px solid rgba(0,0,0,0.5);
                }

                .graph tbody:before,
                .graph tbody:after {
                    position:absolute;
                    left:-3.2em;
                    width:2.8em;
                    text-align:right;
                    font:bold 80%/100% arial,helvetica,sans-serif;
                }

                .graph tbody:after {
                    content:"0";
                    bottom:-0.6em;
                }

                .graph tr {
                    position:relative;
                    display:block;
                }

                .graph tr:hover {
                    z-index:999;
                }

                .graph th,
                .graph td {
                    display:block;
                    text-align:center;
                }

                .graph tbody th {
                    position:absolute;
                    top:-3em;
                    left:0;
                    width:100%;
                    font-weight:normal;
                    text-align:center;
                    white-space:nowrap;
                    text-indent:0;
                    transform:rotate(-45deg);
                }

                .graph tbody th:after {
                    content:"";
                }

                .graph td {
                    width:100%;
                    height:100%;
                    background:skyblue;
                    border-radius:0.5em 0.5em 0 0;
                }

                .graph tr:hover td {
                    opacity:0.7;
                }

                .graph td span {
                    overflow:hidden;
                    position:absolute;
                    left:50%;
                    top:50%;
                    width:0;
                    padding:0.5em 0;
                    margin:-1em 0 0;
                    font:normal 85%/120% arial,helvetica,sans-serif;
                    font-weight:bold;
                    opacity:0;
                    transition:opacity 0.5s;
                    color:white;
                }

                .toggleGraph:checked + table td span,
                .graph tr:hover td span {
                    width:4em;
                    margin-left:-2em;
                    opacity:1;
                }
            }
        }

.table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  background: lightsteelblue;
  width:40%;
  margin-left:30px;
}
.compare {
    margin-top: 50px;
}
</style>