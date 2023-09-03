//const das celulas matriz
const l1_1=document.getElementById("l1_1");
const l1_2=document.getElementById("l1_2");
const l1_3=document.getElementById("l1_3");

const l2_1=document.getElementById("l2_1");
const l2_2=document.getElementById("l2_2");
const l2_3=document.getElementById("l2_3");

const l3_1=document.getElementById("l3_1");
const l3_2=document.getElementById("l3_2");
const l3_3=document.getElementById("l3_3");

const jogador_selecionado=document.getElementById("jogador_selecionado");
const Vencedor_selecionado=document.getElementById("Vencedor_selecionado");
const btn_reiniciar_inicia=document.getElementById("btn_start_resert");

let placar;

let play=false;
let play_pc=false;

let play_verifica="X";
let pc_verifica="O";
let cont_play=0;
let cont_pc=0;
const vitorias = {
    cont_play,
    cont_pc
};

const verifica_campo_Jogadas=[
   l1_1,l1_2,l1_3,l2_1,l2_2,l2_3,l3_1,l3_2,l3_3
];

//seguencia de vitorias 
function verificavitoria(qverifica){
   
   if((l1_1.innerHTML!=""&& 
     (l1_1.innerHTML==l1_2.innerHTML && l1_2.innerHTML==l1_3.innerHTML))
      ||((l1_1.innerHTML!=""&&
         (l1_1.innerHTML==l2_1.innerHTML && l1_1.innerHTML==l3_1.innerHTML)))){
         reiniciar();
         conta_pontos(qverifica); 
            
   }else if((l2_1.innerHTML!=""&&
            (l2_1.innerHTML==l2_2.innerHTML && l2_2.innerHTML==l2_3.innerHTML))
            ||(l2_2.innerHTML!=""&&
            (l1_2.innerHTML==l2_2.innerHTML && l2_2.innerHTML==l3_2.innerHTML))
            ||(l2_2.innerHTML!=""&&
            (l1_1.innerHTML==l2_2.innerHTML && l2_2.innerHTML==l3_3.innerHTML))
            ||(l2_2.innerHTML!=""&&
            (l1_3.innerHTML==l2_2.innerHTML && l2_2.innerHTML==l3_1.innerHTML))
             ){
                reiniciar();
                conta_pontos(qverifica);
   }else if((l3_1.innerHTML!=""&&
           (l3_1.innerHTML==l3_2.innerHTML && l3_2.innerHTML==l3_3.innerHTML))
           ||(l3_3.innerHTML!=""&&
             (l1_3.innerHTML==l2_3.innerHTML && l2_3.innerHTML==l3_3.innerHTML))){
                reiniciar();
                conta_pontos(qverifica);    
            }
}//fim da funçao verifica vitoria 

l1_1.addEventListener("click",()=>{
     if(play==true && l1_1.innerHTML==""){
        l1_1.innerHTML="x";
        play=false;
        play_pc=true;
        verificavitoria(play_verifica);
        jogador_selecionado.innerHTML="O";
        pc_jogar();
     }else{
        alert("campo indisponivel")
    }
});

l1_2.addEventListener("click",()=>{
    if(play==true && l1_2.innerHTML==""){
        l1_2.innerHTML="x";
        play=false;
        play_pc=true;
        verificavitoria(play_verifica)
        jogador_selecionado.innerHTML="O"
        pc_jogar();
}else{
    alert("campo indisponivel")
}
});

l1_3.addEventListener("click",()=>{
    if(play==true && l1_3.innerHTML==""){ 
        play=false;
        play_pc=true;
        l1_3.innerHTML="x";
        verificavitoria(play_verifica)
        jogador_selecionado.innerHTML="O";
        pc_jogar();
}else{
    alert("campo indisponivel")
}
});
l2_1.addEventListener("click",()=>{
    if(play==true && l2_1.innerHTML==""){
        l2_1.innerHTML="x";
        play=false;
        play_pc=true;
        verificavitoria(play_verifica)
        jogador_selecionado.innerHTML="O";
        pc_jogar();
}else{
    alert("campo indisponivel")
}
});
l2_2.addEventListener("click",()=>{
    if(play==true && l2_2.innerHTML==""){
        l2_2.innerHTML="x";
        play=false;
        play_pc=true;
        verificavitoria(play_verifica)
        jogador_selecionado.innerHTML="O"
        pc_jogar();
}else{
    alert("campo indisponivel")
}
});
l2_3.addEventListener("click",()=>{
    if(play==true && l2_3.innerHTML==""){
        l2_3.innerHTML="x";
        play=false;
        play_pc=true;
        verificavitoria(play_verifica);
        jogador_selecionado.innerHTML="O"
        pc_jogar();
}else{
    alert("campo indisponivel")
}
});
l3_1.addEventListener("click",()=>{
    if(play==true && l3_1.innerHTML==""){
        l3_1.innerHTML="x";
        play=false;
        play_pc=true;
        verificavitoria(play_verifica);
        jogador_selecionado.innerHTML="O"
        pc_jogar();
}else{
    alert("campo indisponivel")
}
});
l3_2.addEventListener("click",()=>{
    if(play==true && l3_2.innerHTML==""){
         l3_2.innerHTML="x";
         play=false;
         play_pc=true;
         verificavitoria(play_verifica);
         jogador_selecionado.innerHTML="O"
         pc_jogar();
}else{
    alert("campo indisponivel")
}
});
l3_3.addEventListener("click",()=>{
    if(play==true && l3_3.innerHTML==""){
       l3_3.innerHTML="x";
       play=false;
       play_pc=true;
       verificavitoria(play_verifica);
       jogador_selecionado.innerHTML="O"
       pc_jogar();
}else{
    alert("campo indisponivel")
}
});

const pc_jogar=()=>{
    //jogador_selecionado.innerHTML=""
   setTimeout(() => {
       const escolha_onde_jogar=Math.floor(Math.random()*9);  
        
    if(verifica_campo_Jogadas[escolha_onde_jogar].innerHTML=="" && play_pc==true){
       verifica_campo_Jogadas[escolha_onde_jogar].innerHTML="o";
       play=true;
       play_pc=false;
       verificavitoria(pc_verifica); 
       conta_pontos();
       jogador_selecionado.innerHTML="X"
    }else {
      //  jogador_selecionado.innerHTML="o";
        pc_jogar();
    }
},1000);
};

btn_reiniciar_inicia.addEventListener("click",()=>{
   reiniciar();
});

const conta_pontos=(qverifica)=>{
    /*let play_verifica="X";
let pc_verifica="O";*/
    if(qverifica==play_verifica){
        cont_play++;
        
    }else
    if(qverifica==pc_verifica){
        cont_pc++;
    }
        placar=`Player it's with ${cont_play} Pc_player it's with ${cont_pc}. `;
    Vencedor_selecionado.innerHTML=placar;
};

     const iniciarGame=()=>{
        let a_vez_d = Math.floor(Math.random()*10);
        if(a_vez_d >= 5){
            play=true;
            play_pc=false;
            jogador_selecionado.innerHTML="X"
        }else {
            play=false;
            play_pc=true;
            pc_jogar();
            jogador_selecionado.innerHTML="O"
        };
     };

     const reiniciar=()=>{
        l1_1.innerHTML="";
        l1_2.innerHTML="";
        l1_3.innerHTML="";
        l2_1.innerHTML="";
        l2_2.innerHTML="";
        l2_3.innerHTML="";
        l3_1.innerHTML="";
        l3_2.innerHTML="";
        l3_3.innerHTML="";
        jogador_selecionado.innerHTML="";
        play=false;
        play_pc=false;
        iniciarGame();
     };