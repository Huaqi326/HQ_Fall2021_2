<template>
  <table class="graph">
        <strong>Total Exercise Time</strong>
        <thead>
            <tr>
                <th scope="col">Item</th>
                <th scope="col">Percent</th>
            </tr>
        </thead><tbody>
            <tr style="height:85%">
                <th scope="row">Monday</th>
                <td><span>85min</span></td>
            </tr>
            <tr style="height:23%">
                <th scope="row">Tuesday</th>
                <td><span>23min</span></td>
            </tr>
            <tr style="height:15%">
                <th scope="row">Wednesday</th>
                <td><span>15min</span></td>
            </tr>
            <tr style="height:38%">
                <th scope="row">Thursday</th>
                <td><span>38min</span></td>
            </tr>
            <tr style="height:35%">
                <th scope="row">Friday</th>
                <td><span>35min</span></td>
            </tr>
            <tr style="height:30%">
                <th scope="row">Saturday</th>
                <td><span>30min</span></td>
            </tr>
            <tr style="height:15%">
                <th scope="row">Sunday</th>
                <td><span>15min</span></td>
            </tr>
        </tbody>
    </table>
</template>

<script>
export default {

}
</script>

<style>
.graph {
            margin-bottom:1em;
            font:normal 100%/150% arial,helvetica,sans-serif;
        }

        .graph caption {
            font:bold 150%/120% arial,helvetica,sans-serif;
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
                    font:bold 80%/120% arial,helvetica,sans-serif;
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
                    background:#F63;
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
</style>