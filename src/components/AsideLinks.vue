<template>
    <aside>
        <div><span class="glyphicon glyphicon-star" aria-hidden="true"></span><br>RADOVI POLAZNIKA</div>
        <div><span class="glyphicon glyphicon-info-sign" aria-hidden="true"></span><br> Informacije o obuci</div>
        <div><span class="glyphicon glyphicon-info-sign" aria-hidden="true"></span><br>Informacije o predavaču</div>
        <div><span class="glyphicon glyphicon-download-alt" aria-hidden="true"></span><br>Priručnik za osnovni kurs</div>
        <div><span class="glyphicon glyphicon-download-alt" aria-hidden="true"></span><br>Priručnik za napredni kurs</div>
        <!-- <a href="https://imge.to/i/dJOkG'"><img src="https://b.imge.to/2019/07/27/dJOkG.png" alt="dJOkG.png" border="0" /></a> -->
    </aside>
    
</template>



<script>
export default {
    name: "AsideLinks",

}
</script>



<style scoped>
    
    aside {
        width: 20%;
        position: fixed;
        top: 130px;
        right: 0px;
        height: 80vh;
        text-align: center
        /* background-color: red; */
    }
    aside div {
        width: 80%;
        font-size: 20px;
        text-align: center;
        margin: auto;
        margin-bottom: 10px;
        padding: 10px;
        margin-top: 20px;
        border: 3px solid #294d86;
        background-color: #ededfd;
        color: #1a2947;
        cursor: pointer;
    }
    aside div:hover {
        color: #ededfd;
        background-color: #1a2947;
    }
    aside img {
        width: 70%;
        right: 10%;
        position: absolute;
        bottom: 10px;

    }
    

</style>

