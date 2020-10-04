var reg_answers = [
  'btn1_op1',
  'btn2_op2',
  'btn3_op1',
  'btn4_op4',
  'btn5_op2',
  'btn6_op1',
  'btn7_op2',
  'btn8_op4',
  'btn9_op4',
  'btn10_op3',
  'btn11_op3',
  'btn12_op3',
  'btn13_op3',
  'btn14_op2',
  'btn15_op2',
  'btn16_op1',
  'btn17_op2',
  'btn18_op3',
  'btn19_op4',
  'btn20_op3'
]
var reg_user_answers = [
  '0',
  '0',
  '0',
  '0',
  '0',
  '0',
  '0',
  '0',
  '0',
  '0',
  '0',
  '0',
  '0',
  '0',
  '0',
  '0',
  '0',
  '0',
  '0',
  '0'
]

var nav_answers = [
  'btn1_op4',
  'btn2_op3',
  'btn3_op1',
  'btn4_op1',
  'btn5_op3',
  'btn6_op2',
  'btn7_op3',
  'btn8_op2',
  'btn9_op1',
  'btn10_op2',
  'btn11_op1',
  'btn12_op3',
  'btn13_op2',
  'btn14_op3',
  'btn15_op4',
  'btn16_op4',
  'btn17_op4',
  'btn18_op4',
  'btn19_op1',
  'btn20_op1'
]
var nav_user_answers = [
  '0',
  '0',
  '0',
  '0',
  '0',
  '0',
  '0',
  '0',
  '0',
  '0',
  '0',
  '0',
  '0',
  '0',
  '0',
  '0',
  '0',
  '0',
  '0',
  '0'
]

var met_answers = [
  'btn1_op2',
  'btn2_op3',
  'btn3_op4',
  'btn4_op4',
  'btn5_op4',
  'btn6_op2',
  'btn7_op2',
  'btn8_op4',
  'btn9_op3',
  'btn10_op4',
  'btn11_op1',
  'btn12_op1',
  'btn13_op4',
  'btn14_op4',
  'btn15_op2',
  'btn16_op3',
  'btn17_op3',
  'btn18_op4',
  'btn19_op1',
  'btn20_op1'
]
var met_user_answers = [
  '0',
  '0',
  '0',
  '0',
  '0',
  '0',
  '0',
  '0',
  '0',
  '0',
  '0',
  '0',
  '0',
  '0',
  '0',
  '0',
  '0',
  '0',
  '0',
  '0'
]

var ct_answers = [
  'btn1_op3',
  'btn2_op1',
  'btn3_op4',
  'btn4_op2',
  'btn5_op2',
  'btn6_op4',
  'btn7_op4',
  'btn8_op4',
  'btn9_op2',
  'btn10_op2',
  'btn11_op1',
  'btn12_op1',
  'btn13_op2',
  'btn14_op1',
  'btn15_op4',
  'btn16_op4',
  'btn17_op2',
  'btn18_op3',
  'btn19_op4',
  'btn20_op3'
]
var ct_user_answers = [
  '0',
  '0',
  '0',
  '0',
  '0',
  '0',
  '0',
  '0',
  '0',
  '0',
  '0',
  '0',
  '0',
  '0',
  '0',
  '0',
  '0',
  '0',
  '0',
  '0'
]

var tv_answers = [
  'btn1_op4',
  'btn2_op1',
  'btn3_op3',
  'btn4_op4',
  'btn5_op4',
  'btn6_op3',
  'btn7_op1',
  'btn8_op3',
  'btn9_op1',
  'btn10_op4',
  'btn11_op3',
  'btn12_op2',
  'btn13_op3',
  'btn14_op4',
  'btn15_op1',
  'btn16_op3',
  'btn17_op2',
  'btn18_op2',
  'btn19_op3',
  'btn20_op4'
]
var tv_user_answers = [
  '0',
  '0',
  '0',
  '0',
  '0',
  '0',
  '0',
  '0',
  '0',
  '0',
  '0',
  '0',
  '0',
  '0',
  '0',
  '0',
  '0',
  '0',
  '0',
  '0'
]


//GET THE UTC
var UTC = new Date().getTime()
//SETS EXPIRATION DATE
var expiration_date = UTC + 10800000


//RESETS EVERY 1 SECOND
var x = setInterval(function() {
  //GETS CURRENT TIME
  var present_time   = new Date().getTime()

  //TIME LEFT
  var time_remaining = expiration_date - present_time

  //CONVERSIONS
  var hours   = Math.floor((time_remaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((time_remaining % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((time_remaining % (1000 * 60)) / 1000);

  document.getElementById('clock').innerHTML = hours + 'h ' + minutes + 'm ' + seconds + 's '

  if (time_remaining < 0 ){
    document.getElementById('clock').innerHTML = '0h 0m 0s'
    noTime()
  }

}, 1000)

function noTime(){
  clearInterval(x)
  alert('Tempo de prova esgotado!')
  finish()
}


//CHANGE QUESTIONS AND ANSWERS
var fill_question_header = document.getElementById('question_header')
var c_fill_1 = document.getElementById('fill_1')
var c_fill_2 = document.getElementById('fill_2')
var c_fill_3 = document.getElementById('fill_3')
var c_fill_4 = document.getElementById('fill_4')
var c_op1    = document.getElementById('btn1_op1')
var c_op2    = document.getElementById('btn1_op2')
var c_op3    = document.getElementById('btn1_op3')
var c_op4    = document.getElementById('btn1_op4')


//LOADS REG QUESTIONS
function reg(){
  c_op1.checked = false
  c_op2.checked = false
  c_op3.checked = false
  c_op4.checked = false

  c_op1.setAttribute('id', `btn1_op1`)
  c_op2.setAttribute('id', `btn1_op2`)
  c_op3.setAttribute('id', `btn1_op3`)
  c_op4.setAttribute('id', `btn1_op4`)

  c_op1.setAttribute('oninput', 'reg_question_check()' )
  c_op2.setAttribute('oninput', 'reg_question_check()' )
  c_op3.setAttribute('oninput', 'reg_question_check()' )
  c_op4.setAttribute('oninput', 'reg_question_check()' )
  for ( x=1 ; x<=20 ; x++ ) {
    document.getElementById(`btn${x}`).setAttribute('onclick', `reg_call(${x})`)
  }
  fill_question_header.innerHTML = '1. Durante o táxi as aeronaves devem obedecer as regras:'
  c_fill_1.innerHTML             = 'Gerais.'
  c_fill_2.innerHTML             = 'Específicas.'
  c_fill_3.innerHTML             = 'De voo visual.'
  c_fill_4.innerHTML             = 'De voo por instrumentos.'
  set_reg = reg_user_answers[0]
  if ( set_reg.indexOf("op1") != -1 )
    c_op1.checked = true

  if ( set_reg.indexOf("op2") != -1 )
    c_op2.checked = true
    
  if ( set_reg.indexOf("op3") != -1 )
    c_op3.checked = true
    
  if ( set_reg.indexOf("op4") != -1 )
    c_op4.checked = true
}

//LOADS NAV QUESTIONS
function nav(){
  c_op1.checked = false
  c_op2.checked = false
  c_op3.checked = false
  c_op4.checked = false

  c_op1.setAttribute('id', `btn1_op1`)
  c_op2.setAttribute('id', `btn1_op2`)
  c_op3.setAttribute('id', `btn1_op3`)
  c_op4.setAttribute('id', `btn1_op4`)

  c_op1.setAttribute('oninput', 'nav_question_check()' )
  c_op2.setAttribute('oninput', 'nav_question_check()' )
  c_op3.setAttribute('oninput', 'nav_question_check()' )
  c_op4.setAttribute('oninput', 'nav_question_check()' )
  for ( x=1 ; x<=20 ; x++ ) {
    document.getElementById(`btn${x}`).setAttribute('onclick', `nav_call(${x})`)
  }
  fill_question_header.innerHTML = `1. Considerando-se o ponto A = 18º30'30"S / 171º15'15"E e o ponto B = 18º30'30"S / 129º15'15"W, a LOM entre eles será:`
  c_fill_1.innerHTML             = `029º44'45"E`
  c_fill_2.innerHTML             = `059º29'30"W`
  c_fill_3.innerHTML             = `150º15'15"E`
  c_fill_4.innerHTML             = `159º00'00"W`
  set_nav = nav_user_answers[0]
  if ( set_nav.indexOf("op1") != -1 )
    c_op1.checked = true

  if ( set_nav.indexOf("op2") != -1 )
    c_op2.checked = true
    
  if ( set_nav.indexOf("op3") != -1 )
    c_op3.checked = true
    
  if ( set_nav.indexOf("op4") != -1 )
    c_op4.checked = true
  
}

//LOADS MET QUESTIONS
function met(){
  c_op1.checked = false
  c_op2.checked = false
  c_op3.checked = false
  c_op4.checked = false
  
  c_op1.setAttribute('id', `btn1_op1`)
  c_op2.setAttribute('id', `btn1_op2`)
  c_op3.setAttribute('id', `btn1_op3`)
  c_op4.setAttribute('id', `btn1_op4`)

  c_op1.setAttribute('oninput', 'met_question_check()' )
  c_op2.setAttribute('oninput', 'met_question_check()' )
  c_op3.setAttribute('oninput', 'met_question_check()' )
  c_op4.setAttribute('oninput', 'met_question_check()' )
  for ( x=1 ; x<=20 ; x++ ) {
    document.getElementById(`btn${x}`).setAttribute('onclick', `met_call(${x})`)
  }
  fill_question_header.innerHTML = '1. DENTRE AS ALTERNATIVAS RELACIONADAS ABAIXO, INDIQUE A QUE CONTENHA UMA DAS CONSEQÜÊNCIAS QUANDO OCORRE A IGUALDADE ENTRE A TEMPERATURA DO AR E A DO PONTO DE ORVALHO:'
  c_fill_1.innerHTML             = 'VENTOS FORTES'
  c_fill_2.innerHTML             = 'SATURAÇÂO DO AR'
  c_fill_3.innerHTML             = 'ARIDEZ DA ATMOSFERA'
  c_fill_4.innerHTML             = 'FORMAÇAO DE NÉVOA SECA'
  set_met = met_user_answers[0]
  if ( set_met.indexOf("op1") != -1 )
    c_op1.checked = true

  if ( set_met.indexOf("op2") != -1 )
    c_op2.checked = true
    
  if ( set_met.indexOf("op3") != -1 )
    c_op3.checked = true
    
  if ( set_met.indexOf("op4") != -1 )
    c_op4.checked = true
}

//LOADS CT QUESTIONS
function ct(){
  c_op1.checked = false
  c_op2.checked = false
  c_op3.checked = false
  c_op4.checked = false
  
  c_op1.setAttribute('id', `btn1_op1`)
  c_op2.setAttribute('id', `btn1_op2`)
  c_op3.setAttribute('id', `btn1_op3`)
  c_op4.setAttribute('id', `btn1_op4`)

  c_op1.setAttribute('oninput', 'ct_question_check()' )
  c_op2.setAttribute('oninput', 'ct_question_check()' )
  c_op3.setAttribute('oninput', 'ct_question_check()' )
  c_op4.setAttribute('oninput', 'ct_question_check()' )
  for ( x=1 ; x<=20 ; x++ ) {
    document.getElementById(`btn${x}`).setAttribute('onclick', `ct_call(${x})`)
  }
  fill_question_header.innerHTML = '1. Se, durante o funcionamento normal do motor o filtro de óleo vier a ficar obstruído, o(a):'
  c_fill_1.innerHTML             = 'Motor apagar-se-á.'
  c_fill_2.innerHTML             = 'Válvula By-Pass fechar-se-á.'
  c_fill_3.innerHTML             = 'Motor funcionará com o óleo contaminado.'
  c_fill_4.innerHTML             = 'Válvula reguladora de pressão abrir-se-á'
  set_ct = ct_user_answers[0]
  if ( set_ct.indexOf("op1") != -1 )
    c_op1.checked = true

  if ( set_ct.indexOf("op2") != -1 )
    c_op2.checked = true
    
  if ( set_ct.indexOf("op3") != -1 )
    c_op3.checked = true
    
  if ( set_ct.indexOf("op4") != -1 )
    c_op4.checked = true

}

//LOADS TV QUESTIONS
function tv(){
  c_op1.checked = false
  c_op2.checked = false
  c_op3.checked = false
  c_op4.checked = false
  
  c_op1.setAttribute('id', `btn1_op1`)
  c_op2.setAttribute('id', `btn1_op2`)
  c_op3.setAttribute('id', `btn1_op3`)
  c_op4.setAttribute('id', `btn1_op4`)

  c_op1.setAttribute('oninput', 'tv_question_check()' )
  c_op2.setAttribute('oninput', 'tv_question_check()' )
  c_op3.setAttribute('oninput', 'tv_question_check()' )
  c_op4.setAttribute('oninput', 'tv_question_check()' )
  for ( x=1 ; x<=20 ; x++ ) {
    document.getElementById(`btn${x}`).setAttribute('onclick', `tv_call(${x})`)
  }
  fill_question_header.innerHTML = '1. Quanto a desidade do ar, pode-se afirmar que:'
  c_fill_1.innerHTML             = 'Aumenta, com o aumento da altitude.'
  c_fill_2.innerHTML             = 'Diminui, com a diminuição da altitude.'
  c_fill_3.innerHTML             = 'Aumenta, com o aumento da temperatura'
  c_fill_4.innerHTML             = 'Diminui, com o aumento da temperatura.'
  set_tv = tv_user_answers[0]
  if ( set_tv.indexOf("op1") != -1 )
    c_op1.checked = true

  if ( set_tv.indexOf("op2") != -1 )
    c_op2.checked = true
    
  if ( set_tv.indexOf("op3") != -1 )
    c_op3.checked = true
    
  if ( set_tv.indexOf("op4") != -1 )
    c_op4.checked = true
}



var button_that_clicked
//REG QUESTIONS
function reg_call(question_btn){
  c_op1.checked = false
  c_op2.checked = false
  c_op3.checked = false
  c_op4.checked = false
  button_that_clicked = window.event.target.id
  c_op1.setAttribute('id', `${button_that_clicked}_op1`)
  c_op2.setAttribute('id', `${button_that_clicked}_op2`)
  c_op3.setAttribute('id', `${button_that_clicked}_op3`)
  c_op4.setAttribute('id', `${button_that_clicked}_op4`)

  c_op1.setAttribute('oninput', `reg_question_check()`)
  c_op2.setAttribute('oninput', `reg_question_check()`)
  c_op3.setAttribute('oninput', `reg_question_check()`)
  c_op4.setAttribute('oninput', `reg_question_check()`)
  var set_reg
  switch (question_btn){
    case 1:
      fill_question_header.innerHTML = '1. Durante o táxi as aeronaves devem obedecer as regras:'
      c_fill_1.innerHTML             = 'Gerais.'
      c_fill_2.innerHTML             = 'Específicas.'
      c_fill_3.innerHTML             = 'De voo visual.'
      c_fill_4.innerHTML             = 'De voo por instrumentos.'
      set_reg = reg_user_answers[0]
      if ( set_reg.indexOf("op1") != -1 )
        btn1_op1.checked = true

      if ( set_reg.indexOf("op2") != -1 )
        btn1_op2.checked = true
    
      if ( set_reg.indexOf("op3") != -1 )
        btn1_op3.checked = true
    
      if ( set_reg.indexOf("op4") != -1 )
        btn1_op4.checked = true
      break;
      
    case 2:
      fill_question_header.innerHTML = '2. Segundo o CBA, uma ação por danos causados por aeronave a terceiros na superfície prescreve em:'
      c_fill_1.innerHTML             = '1 Ano.'
      c_fill_2.innerHTML             = '2 Anos.'
      c_fill_3.innerHTML             = '3 Meses.'
      c_fill_4.innerHTML             = '4 Meses.'
      set_reg = reg_user_answers[1]
      if ( set_reg.indexOf("op1") != -1 )
        btn2_op1.checked = true

      if ( set_reg.indexOf("op2") != -1 )
        btn2_op2.checked = true
    
      if ( set_reg.indexOf("op3") != -1 )
        btn2_op3.checked = true
    
      if ( set_reg.indexOf("op4") != -1 )
        btn2_op4.checked = true
      break;
      
    case 3:
       fill_question_header.innerHTML = '3. Em um aeródromo cuja elevação seja de 1500FT, o circuito de tráfego padrão para aeronaves a hélice será efetuado a uma altura de:'
      c_fill_1.innerHTML             = '1000FT.'
      c_fill_2.innerHTML             = '1500FT.'
      c_fill_3.innerHTML             = '2000FT.'
      c_fill_4.innerHTML             = '2500FT.'
      set_reg = reg_user_answers[2]
      if ( set_reg.indexOf("op1") != -1 )
        btn3_op1.checked = true

      if ( set_reg.indexOf("op2") != -1 )
        btn3_op2.checked = true
    
      if ( set_reg.indexOf("op3") != -1 )
        btn3_op3.checked = true
    
      if ( set_reg.indexOf("op4") != -1 )
        btn3_op4.checked = true
      break; 
      
    case 4:
      fill_question_header.innerHTML = '4. Conforme a NSCA 3-2/2008, participar, apoiar e acompanhar as atividades de prevenção de incidentes e acidentes aeronáuticos no âmbito da aviação civil é atribuição da(o):'
      c_fill_1.innerHTML             = 'Elo-SIPAER.'
      c_fill_2.innerHTML             = 'Estado-Maior da aeronáutica.'
      c_fill_3.innerHTML             = 'Divisão de divulgação operacional do SIPAER.'
      c_fill_4.innerHTML             = 'Gerência Geral de Investigação e Prevenção da ANAC.'
      set_reg = reg_user_answers[3]
      if ( set_reg.indexOf("op1") != -1 )
        btn4_op1.checked = true

      if ( set_reg.indexOf("op2") != -1 )
        btn4_op2.checked = true
    
      if ( set_reg.indexOf("op3") != -1 )
        btn4_op3.checked = true
    
      if ( set_reg.indexOf("op4") != -1 )
        btn4_op4.checked = true
      break; 
      
    case 5:
      fill_question_header.innerHTML = '5. Para que uma ACFT possa penetrar em áreas restritas deverá se ajustar as restrições ou, então, obter autorização através do(a):'
      c_fill_1.innerHTML             = 'GER.'
      c_fill_2.innerHTML             = 'SRPV.'
      c_fill_3.innerHTML             = 'ANAC.'
      c_fill_4.innerHTML             = 'DECEA.'
      set_reg = reg_user_answers[4]
      if ( set_reg.indexOf("op1") != -1 )
        btn5_op1.checked = true

      if ( set_reg.indexOf("op2") != -1 )
        btn5_op2.checked = true
    
      if ( set_reg.indexOf("op3") != -1 )
        btn5_op3.checked = true
    
      if ( set_reg.indexOf("op4") != -1 )
        btn5_op4.checked = true
      break;  

    case 6:
      fill_question_header.innerHTML = '6. No plano de voo o valor declarado como velocidade de cruzeiro refere-se a:'
      c_fill_1.innerHTML             = 'VA.'
      c_fill_2.innerHTML             = 'VC.'
      c_fill_3.innerHTML             = 'VI.'
      c_fill_4.innerHTML             = 'VS.'
      set_reg = reg_user_answers[5]
      if ( set_reg.indexOf("op1") != -1 )
        btn6_op1.checked = true

      if ( set_reg.indexOf("op2") != -1 )
        btn6_op2.checked = true
    
      if ( set_reg.indexOf("op3") != -1 )
        btn6_op3.checked = true
    
      if ( set_reg.indexOf("op4") != -1 )
        btn6_op4.checked = true
      break;
        
    case 7: 
      fill_question_header.innerHTML = '7. Nos voos em condições visuais, a responsabilidade de se evitar abalroamento entre aeronaves no circuito é do:'
      c_fill_1.innerHTML             = 'Instrutor de voo.'
      c_fill_2.innerHTML             = 'Piloto de aeronave.'
      c_fill_3.innerHTML             = 'Controlador de voo.'
      c_fill_4.innerHTML             = 'Operador do controle.'
      set_reg = reg_user_answers[6]
      if ( set_reg.indexOf("op1") != -1 )
        btn7_op1.checked = true

      if ( set_reg.indexOf("op2") != -1 )
        btn7_op2.checked = true
    
      if ( set_reg.indexOf("op3") != -1 )
        btn7_op3.checked = true
    
      if ( set_reg.indexOf("op4") != -1 )
        btn7_op4.checked = true
      break;
        
    case 8:
      fill_question_header.innerHTML = '8. O plano de voo pode ser preenchido e assinado pelo(s):'
      c_fill_1.innerHTML             = 'Pilotos somente.'
      c_fill_2.innerHTML             = 'Tripulantes de qualquer aeronave.'
      c_fill_3.innerHTML             = 'Comandantes das aeronaves somente.'
      c_fill_4.innerHTML             = 'Pilotos e despachantes operacionais de voo.'
      set_reg = reg_user_answers[7]
      if ( set_reg.indexOf("op1") != -1 )
        btn8_op1.checked = true

      if ( set_reg.indexOf("op2") != -1 )
        btn8_op2.checked = true
    
      if ( set_reg.indexOf("op3") != -1 )
        btn8_op3.checked = true
    
      if ( set_reg.indexOf("op4") != -1 )
        btn8_op4.checked = true
      break; 
        
    case 9:
      fill_question_header.innerHTML = '9. É compulsória a apresentação do plano de voo antes de realizar voo VFR:'
      c_fill_1.innerHTML             = 'Especial.'
      c_fill_2.innerHTML             = 'Dentro de ATZ.'
      c_fill_3.innerHTML             = 'Através de limites interestaduais.'
      c_fill_4.innerHTML             = 'Em rota, sempre que partir de aeródromo provido de orgão ATS.'
      set_reg = reg_user_answers[8]
      if ( set_reg.indexOf("op1") != -1 )
        btn9_op1.checked = true

      if ( set_reg.indexOf("op2") != -1 )
        btn9_op2.checked = true
    
      if ( set_reg.indexOf("op3") != -1 )
        btn9_op3.checked = true
    
      if ( set_reg.indexOf("op4") != -1 )
        btn9_op4.checked = true
      break; 
        
    case 10:
      fill_question_header.innerHTML = '10. A aeronave que pousar num AD controlado deve manter-se na escuta da TWR ou do controle de solo até:'
      c_fill_1.innerHTML             = 'Livrar a pista em uso.'
      c_fill_2.innerHTML             = 'Livra a pista de táxi.'
      c_fill_3.innerHTML             = 'A parada total dos motores.'
      c_fill_4.innerHTML             = 'Cumprir orientações do sinalizador.'
      set_reg = reg_user_answers[9]
      if ( set_reg.indexOf("op1") != -1 )
        btn10_op1.checked = true

      if ( set_reg.indexOf("op2") != -1 )
        btn10_op2.checked = true
    
      if ( set_reg.indexOf("op3") != -1 )
        btn10_op3.checked = true
    
      if ( set_reg.indexOf("op4") != -1 )
        btn10_op4.checked = true
      break;  

    case 11:
      fill_question_header.innerHTML = '11. Os elementos básicos do circuito de tráfego padrão são, sequencialmente:'
      c_fill_1.innerHTML             = 'Perna do vento, perna contra o vento, curva base e reta final.'
      c_fill_2.innerHTML             = 'Perna do vento, perna contra o vento, perna de través e reta final.'
      c_fill_3.innerHTML             = 'Perna contra o vento, perna de través, perna do vento, perna base e reta final.'
      c_fill_4.innerHTML             = 'Perna contra o vento, perna de través, perna do vento, curva base e reta final.'
      set_reg = reg_user_answers[10]
      if ( set_reg.indexOf("op1") != -1 )
        btn11_op1.checked = true

      if ( set_reg.indexOf("op2") != -1 )
        btn11_op2.checked = true
    
      if ( set_reg.indexOf("op3") != -1 )
        btn11_op3.checked = true
    
      if ( set_reg.indexOf("op4") != -1 )
        btn11_op4.checked = true
      break;
      
    case 12:
      fill_question_header.innerHTML = '12. A designação dada à uma área perigosa de número 14 do terceiro COMAR é:'
      c_fill_1.innerHTML             = 'SBR 143.'
      c_fill_2.innerHTML             = 'SBP 314.'
      c_fill_3.innerHTML             = 'SBD 314.'
      c_fill_4.innerHTML             = 'SBR 341.'
      set_reg = reg_user_answers[11]
      if ( set_reg.indexOf("op1") != -1 )
        btn12_op1.checked = true

      if ( set_reg.indexOf("op2") != -1 )
        btn12_op2.checked = true
    
      if ( set_reg.indexOf("op3") != -1 )
        btn12_op3.checked = true
    
      if ( set_reg.indexOf("op4") != -1 )
        btn12_op4.checked = true
      break;
      
    case 13:
      fill_question_header.innerHTML = '13. Para que um aeródromo seja considerado aberto para operação VFR é necessário que o teto seja de ....... pés e que a visibilidade seja de ........:'
      c_fill_1.innerHTML             = '1.000; 3.000.'
      c_fill_2.innerHTML             = '1.500; 3.000.'
      c_fill_3.innerHTML             = '1.500; 5.000.'
      c_fill_4.innerHTML             = '2.000; 5.000.'
      set_reg = reg_user_answers[12]
      if ( set_reg.indexOf("op1") != -1 )
        btn13_op1.checked = true

      if ( set_reg.indexOf("op2") != -1 )
        btn13_op2.checked = true
    
      if ( set_reg.indexOf("op3") != -1 )
        btn13_op3.checked = true
    
      if ( set_reg.indexOf("op4") != -1 )
        btn13_op4.checked = true
      break; 
      
    case 14:
      fill_question_header.innerHTML = '14. As classes dos espaços aéreos ATS nos quais as ACFT com plano de VFR só poderão entrar e voar em TMA ou CTR, após autirzação do APP são:'
      c_fill_1.innerHTML             = 'A,B ou C.'
      c_fill_2.innerHTML             = 'B,C ou D.'
      c_fill_3.innerHTML             = 'C,D ou F.'
      c_fill_4.innerHTML             = 'D,F ou G.'
      set_reg = reg_user_answers[13]
      if ( set_reg.indexOf("op1") != -1 )
        btn14_op1.checked = true

      if ( set_reg.indexOf("op2") != -1 )
        btn14_op2.checked = true
    
      if ( set_reg.indexOf("op3") != -1 )
        btn14_op3.checked = true
    
      if ( set_reg.indexOf("op4") != -1 )
        btn14_op4.checked = true
      break; 
      
    case 15:
      fill_question_header.innerHTML = '15. Sabendo-se que um determinado AD possui a elevação de 2910FT, uma ACFT a reação realizando o circuito de tráfego padrão encontra-se a uma altura de:'
      c_fill_1.innerHTML             = '1000FT.'
      c_fill_2.innerHTML             = '1500FT.'
      c_fill_3.innerHTML             = '3910FT.'
      c_fill_4.innerHTML             = '4410FT.'
      set_reg = reg_user_answers[14]
      if ( set_reg.indexOf("op1") != -1 )
        btn15_op1.checked = true

      if ( set_reg.indexOf("op2") != -1 )
        btn15_op2.checked = true
    
      if ( set_reg.indexOf("op3") != -1 )
        btn15_op3.checked = true
    
      if ( set_reg.indexOf("op4") != -1 )
        btn15_op4.checked = true
      break;  

    case 16:
      fill_question_header.innerHTML = '16. No que diz respeito ao nível de transição, dentre as alternativas baixo pode-se afirmar que quanto:'
      c_fill_1.innerHTML             = 'Menor o QNH, maior o nível de transição.'
      c_fill_2.innerHTML             = 'Maior o QNE, maior o nível de transição.'
      c_fill_3.innerHTML             = 'Maior o QNH, maior o nível de transição.'
      c_fill_4.innerHTML             = 'Menor o QNE, maior o nível de transição.'
      set_reg = reg_user_answers[15]
      if ( set_reg.indexOf("op1") != -1 )
        btn16_op1.checked = true

      if ( set_reg.indexOf("op2") != -1 )
        btn16_op2.checked = true
    
      if ( set_reg.indexOf("op3") != -1 )
        btn16_op3.checked = true
    
      if ( set_reg.indexOf("op4") != -1 )
        btn16_op4.checked = true
      break;
        
    case 17:
      fill_question_header.innerHTML = '17. Dentre as alternativas abaixo, em que situação poderá uma aeronave civil pousar em um aeródromo militar:'
      c_fill_1.innerHTML             = 'Em voo de treinamento.'
      c_fill_2.innerHTML             = 'Em situação de emergência.'
      c_fill_3.innerHTML             = 'Quando quiser pois não há restrições.'
      c_fill_4.innerHTML             = 'Poderá pousar quando quiser desde que não embarque passageiros.'
      set_reg = reg_user_answers[16]
      if ( set_reg.indexOf("op1") != -1 )
        btn17_op1.checked = true

      if ( set_reg.indexOf("op2") != -1 )
        btn17_op2.checked = true
    
      if ( set_reg.indexOf("op3") != -1 )
        btn17_op3.checked = true
    
      if ( set_reg.indexOf("op4") != -1 )
        btn17_op4.checked = true
      break;
        
    case 18:
      fill_question_header.innerHTML = '18. A sigla "SBD", na identificação de um espaço aéreo condicionado indica que é uma área:'
      c_fill_1.innerHTML             = 'Perigosa, cujo sobrevoo é proibido.'
      c_fill_2.innerHTML             = 'Na qual o voo de aeronaves é proibido.'
      c_fill_3.innerHTML             = 'Perigosa, na qual pode existir perigo para a aeronave que a sobrevoar.'
      c_fill_4.innerHTML             = 'Restrita, cujo sobrevoo so podera ser realizado de acordo com as condições preestabelecidas.'
      set_reg = reg_user_answers[17]
      if ( set_reg.indexOf("op1") != -1 )
        btn18_op1.checked = true

      if ( set_reg.indexOf("op2") != -1 )
        btn18_op2.checked = true
    
      if ( set_reg.indexOf("op3") != -1 )
        btn18_op3.checked = true
    
      if ( set_reg.indexOf("op4") != -1 )
        btn18_op4.checked = true
      break; 
        
    case 19:
      fill_question_header.innerHTML = '19. No caso de pouso forçado, a autoridade do comandante persiste:'
      c_fill_1.innerHTML             = 'Indefinidamente.'
      c_fill_2.innerHTML             = 'Até o corte dos motores.'
      c_fill_3.innerHTML             = 'Até o desembarque do último passageiro.'
      c_fill_4.innerHTML             = 'Até que as autoridades competentes assumam a resposabilidade.'
      set_reg = reg_user_answers[18]
      if ( set_reg.indexOf("op1") != -1 )
        btn19_op1.checked = true

      if ( set_reg.indexOf("op2") != -1 )
        btn19_op2.checked = true
    
      if ( set_reg.indexOf("op3") != -1 )
        btn19_op3.checked = true
    
      if ( set_reg.indexOf("op4") != -1 )
        btn19_op4.checked = true
      break; 
        
    case 20:
      fill_question_header.innerHTML = '20. Os aeródromos são classificados em:'
      c_fill_1.innerHTML             = 'Civis e públicos.'
      c_fill_2.innerHTML             = 'Civis e privados.'
      c_fill_3.innerHTML             = 'Civis e militares.'
      c_fill_4.innerHTML             = 'Públicos e privados.'
      set_reg = reg_user_answers[19]
      if ( set_reg.indexOf("op1") != -1 )
        btn20_op1.checked = true

      if ( set_reg.indexOf("op2") != -1 )
        btn20_op2.checked = true
    
      if ( set_reg.indexOf("op3") != -1 )
        btn20_op3.checked = true
    
      if ( set_reg.indexOf("op4") != -1 )
        btn20_op4.checked = true
      break;  

    default:
      alert('Something went wrong!')
  }
}

//NAV QUESTIONS
function nav_call(question_btn){
  c_op1.checked = false
  c_op2.checked = false
  c_op3.checked = false
  c_op4.checked = false
  button_that_clicked = window.event.target.id
  c_op1.setAttribute('id', `${button_that_clicked}_op1`)
  c_op2.setAttribute('id', `${button_that_clicked}_op2`)
  c_op3.setAttribute('id', `${button_that_clicked}_op3`)
  c_op4.setAttribute('id', `${button_that_clicked}_op4`)

  c_op1.setAttribute('oninput', `nav_question_check()`)
  c_op2.setAttribute('oninput', `nav_question_check()`)
  c_op3.setAttribute('oninput', `nav_question_check()`)
  c_op4.setAttribute('oninput', `nav_question_check()`)
  var set_nav
  switch (question_btn){
    case 1:
      fill_question_header.innerHTML = `1. Considerando-se o ponto A = 18º30'30"S / 171º15'15"E e o ponto B = 18º30'30"S / 129º15'15"W, a LOM entre eles será:`
      c_fill_1.innerHTML             = `029º44'45"E`
      c_fill_2.innerHTML             = `059º29'30"W`
      c_fill_3.innerHTML             = `150º15'15"E`
      c_fill_4.innerHTML             = `159º00'00"W`
      set_nav = nav_user_answers[0]
      if ( set_nav.indexOf("op1") != -1 )
        btn1_op1.checked = true
      
      if ( set_nav.indexOf("op2") != -1 )
        btn1_op2.checked = true
    
      if ( set_nav.indexOf("op3") != -1 )
        btn1_op3.checked = true
    
      if ( set_nav.indexOf("op4") != -1 )
        btn1_op4.checked = true
      break;
      
    case 2:
      fill_question_header.innerHTML = '2. Dados: FL=125, OAT=10ºC, VA=270KT, a "VI" em milhas terrestres é:'
      c_fill_1.innerHTML             = '229 ST.'
      c_fill_2.innerHTML             = '239 ST.'
      c_fill_3.innerHTML             = '249 ST.'
      c_fill_4.innerHTML             = '259 ST.'
      set_nav = nav_user_answers[1]
      if ( set_nav.indexOf("op1") != -1 )
        btn2_op1.checked = true
      
      if ( set_nav.indexOf("op2") != -1 )
        btn2_op2.checked = true
    
      if ( set_nav.indexOf("op3") != -1 )
        btn2_op3.checked = true
    
      if ( set_nav.indexOf("op4") != -1 )
        btn2_op4.checked = true
      break;
      
    case 3:
      fill_question_header.innerHTML = '3. Um meridiano que tenha uma diferença de longitude de 180 graus em relação a um outro será denominado:'
      c_fill_1.innerHTML             = 'Anti-meridiano.'
      c_fill_2.innerHTML             = 'Primeiro meridiano.'
      c_fill_3.innerHTML             = 'Meridiano de origem.'
      c_fill_4.innerHTML             = 'Meridiano de greenwich.'
      set_nav = nav_user_answers[2]
      if ( set_nav.indexOf("op1") != -1 )
        btn3_op1.checked = true
      
      if ( set_nav.indexOf("op2") != -1 )
        btn3_op2.checked = true
    
      if ( set_nav.indexOf("op3") != -1 )
        btn3_op3.checked = true
    
      if ( set_nav.indexOf("op4") != -1 )
        btn3_op4.checked = true
      break; 
      
    case 4:
      fill_question_header.innerHTML = '4. No estudo dos fusos horários é possível afirmar que em:'
      c_fill_1.innerHTML             = 'Um lugar a oeste de greenwich é mais cedo.'
      c_fill_2.innerHTML             = 'Um lugar a este de greenwich é mais cedo.'
      c_fill_3.innerHTML             = 'Greenwich é mais cedo que um lugar a oeste.'
      c_fill_4.innerHTML             = 'Greenwich é mais tarde que um lugar a este.'
      set_nav = nav_user_answers[3]
      if ( set_nav.indexOf("op1") != -1 )
        btn4_op1.checked = true
      
      if ( set_nav.indexOf("op2") != -1 )
        btn4_op2.checked = true
    
      if ( set_nav.indexOf("op3") != -1 )
        btn4_op3.checked = true
    
      if ( set_nav.indexOf("op4") != -1 )
        btn4_op4.checked = true
      break; 
      
    case 5:
      fill_question_header.innerHTML = '5. O resultado da conversão de 51L em US GAL é:'
      c_fill_1.innerHTML             = '3,2 US GAL'
      c_fill_2.innerHTML             = '6,2 US GAL'
      c_fill_3.innerHTML             = '13,2 US GAL'
      c_fill_4.innerHTML             = '132 US GAL'
      set_nav = nav_user_answers[4]
      if ( set_nav.indexOf("op1") != -1 )
        btn5_op1.checked = true
      
      if ( set_nav.indexOf("op2") != -1 )
        btn5_op2.checked = true
    
      if ( set_nav.indexOf("op3") != -1 )
        btn5_op3.checked = true
    
      if ( set_nav.indexOf("op4") != -1 )
        btn5_op4.checked = true
      break;  

    case 6:
      fill_question_header.innerHTML = '6. A distância vertical acima do nível do mar, corrigida para as variações de pressão e temperatura, chama-se altitude:'
      c_fill_1.innerHTML             = 'Absoluta.'
      c_fill_2.innerHTML             = 'Verdadeira.'
      c_fill_3.innerHTML             = 'Altimétrica.'
      c_fill_4.innerHTML             = 'Termobárica.'
      set_nav = nav_user_answers[5]
      if ( set_nav.indexOf("op1") != -1 )
        btn6_op1.checked = true
      
      if ( set_nav.indexOf("op2") != -1 )
        btn6_op2.checked = true
    
      if ( set_nav.indexOf("op3") != -1 )
        btn6_op3.checked = true
    
      if ( set_nav.indexOf("op4") != -1 )
        btn6_op4.checked = true
      break;
        
    case 7: 
      fill_question_header.innerHTML = '7. O nível de voo de uma ACFT é dado pela distância vertical, medida a partir do(a):'
      c_fill_1.innerHTML             = 'Superfície terrestre.'
      c_fill_2.innerHTML             = 'Aeródromo sobrevoado.'
      c_fill_3.innerHTML             = 'Nível de pressão padrão.'
      c_fill_4.innerHTML             = 'Ponto qualquer considerado.'
      set_nav = nav_user_answers[6]
      if ( set_nav.indexOf("op1") != -1 )
        btn7_op1.checked = true
      
      if ( set_nav.indexOf("op2") != -1 )
        btn7_op2.checked = true
    
      if ( set_nav.indexOf("op3") != -1 )
        btn7_op3.checked = true
    
      if ( set_nav.indexOf("op4") != -1 )
        btn7_op4.checked = true
      break;
        
    case 8:
      fill_question_header.innerHTML = '8. A partir do meridiano de greenwich são contadas as:'
      c_fill_1.innerHTML             = 'Latitudes.'
      c_fill_2.innerHTML             = 'Longitudes.'
      c_fill_3.innerHTML             = 'Diferenças de latitude.'
      c_fill_4.innerHTML             = 'Diferenças de longitude.'
      set_nav = nav_user_answers[7]
      if ( set_nav.indexOf("op1") != -1 )
        btn8_op1.checked = true
      
      if ( set_nav.indexOf("op2") != -1 )
        btn8_op2.checked = true
    
      if ( set_nav.indexOf("op3") != -1 )
        btn8_op3.checked = true
    
      if ( set_nav.indexOf("op4") != -1 )
        btn8_op4.checked = true
      break; 
        
    case 9:
      fill_question_header.innerHTML = '9. Para uma localidade situada na coordenada 52ºS / 152ºW onde a HLO é 12:02, a UTC será de:'
      c_fill_1.innerHTML             = '22:10'
      c_fill_2.innerHTML             = '22:18'
      c_fill_3.innerHTML             = '23:10'
      c_fill_4.innerHTML             = '23:18'
      set_nav = nav_user_answers[8]
      if ( set_nav.indexOf("op1") != -1 )
        btn9_op1.checked = true
      
      if ( set_nav.indexOf("op2") != -1 )
        btn9_op2.checked = true
    
      if ( set_nav.indexOf("op3") != -1 )
        btn9_op3.checked = true
    
      if ( set_nav.indexOf("op4") != -1 )
        btn9_op4.checked = true
      break; 
        
    case 10:
      fill_question_header.innerHTML = '10. A distância vertical entre uma aeronave e um ponto qualquer de referência no solo denomina-se altitude:'
      c_fill_1.innerHTML             = 'Pressão.'
      c_fill_2.innerHTML             = 'Absoluta.'
      c_fill_3.innerHTML             = 'Calibrada.'
      c_fill_4.innerHTML             = 'Verdadeira.'
      set_nav = nav_user_answers[9]
      if ( set_nav.indexOf("op1") != -1 )
        btn10_op1.checked = true
      
      if ( set_nav.indexOf("op2") != -1 )
        btn10_op2.checked = true
    
      if ( set_nav.indexOf("op3") != -1 )
        btn10_op3.checked = true
    
      if ( set_nav.indexOf("op4") != -1 )
        btn10_op4.checked = true
      break;  

    case 11:
      fill_question_header.innerHTML = '11. Rota ou linha loxodrômica é aquela que cruza os meridianos em ângulos:'
      c_fill_1.innerHTML             = 'Iguais.'
      c_fill_2.innerHTML             = 'Agudos.'
      c_fill_3.innerHTML             = 'Normais.'
      c_fill_4.innerHTML             = 'Diferentes.'
      set_nav = nav_user_answers[10]
      if ( set_nav.indexOf("op1") != -1 )
        btn11_op1.checked = true
      
      if ( set_nav.indexOf("op2") != -1 )
        btn11_op2.checked = true
    
      if ( set_nav.indexOf("op3") != -1 )
        btn11_op3.checked = true
    
      if ( set_nav.indexOf("op4") != -1 )
        btn11_op4.checked = true
      break;
      
    case 12:
      fill_question_header.innerHTML = '12. O ângulo formado entre um meridiano e a direção a ser seguida chama-se:'
      c_fill_1.innerHTML             = 'ACD.'
      c_fill_2.innerHTML             = 'Rota.'
      c_fill_3.innerHTML             = 'Rumo.'
      c_fill_4.innerHTML             = 'Proa.'
      set_nav = nav_user_answers[11]
      if ( set_nav.indexOf("op1") != -1 )
        btn12_op1.checked = true
      
      if ( set_nav.indexOf("op2") != -1 )
        btn12_op2.checked = true
    
      if ( set_nav.indexOf("op3") != -1 )
        btn12_op3.checked = true
    
      if ( set_nav.indexOf("op4") != -1 )
        btn12_op4.checked = true
      break;
      
    case 13:
      fill_question_header.innerHTML = '13. A abreviatura "SW" pertence ao grupo de pontos:'
      c_fill_1.innerHTML             = 'Cardeais.'
      c_fill_2.innerHTML             = 'Colaterais.'
      c_fill_3.innerHTML             = 'Sub-cardeais.'
      c_fill_4.innerHTML             = 'Sub-colaterais.'
      set_nav = nav_user_answers[12]
      if ( set_nav.indexOf("op1") != -1 )
        btn13_op1.checked = true
      
      if ( set_nav.indexOf("op2") != -1 )
        btn13_op2.checked = true
    
      if ( set_nav.indexOf("op3") != -1 )
        btn13_op3.checked = true
    
      if ( set_nav.indexOf("op4") != -1 )
        btn13_op4.checked = true
      break; 
      
    case 14:
      fill_question_header.innerHTML = '14. A rota que atravessa os meridianos em ângulos diferentes chama-se:'
      c_fill_1.innerHTML             = 'Direta.'
      c_fill_2.innerHTML             = 'Mercator.'
      c_fill_3.innerHTML             = 'Ortodrômica.'
      c_fill_4.innerHTML             = 'Loxodrômica.'
      set_nav = nav_user_answers[13]
      if ( set_nav.indexOf("op1") != -1 )
        btn14_op1.checked = true
      
      if ( set_nav.indexOf("op2") != -1 )
        btn14_op2.checked = true
    
      if ( set_nav.indexOf("op3") != -1 )
        btn14_op3.checked = true
    
      if ( set_nav.indexOf("op4") != -1 )
        btn14_op4.checked = true
      break; 
      
    case 15:
      fill_question_header.innerHTML = '15. A força que faz com que a agulha da bússola se alinha com a direção norte-sul é conhecida por:'
      c_fill_1.innerHTML             = 'Desvio de agulha.'
      c_fill_2.innerHTML             = 'Desvio de bússola.'
      c_fill_3.innerHTML             = 'Componente vertical.'
      c_fill_4.innerHTML             = 'Componente horizontal.'
      set_nav = nav_user_answers[14]
      if ( set_nav.indexOf("op1") != -1 )
        btn15_op1.checked = true
      
      if ( set_nav.indexOf("op2") != -1 )
        btn15_op2.checked = true
    
      if ( set_nav.indexOf("op3") != -1 )
        btn15_op3.checked = true
    
      if ( set_nav.indexOf("op4") != -1 )
        btn15_op4.checked = true
      break;  

    case 16:
      fill_question_header.innerHTML = '16. As linhas que unem os pontos de mesmo ângulo de inclinação são denominadas:'
      c_fill_1.innerHTML             = 'Isóbaras.'
      c_fill_2.innerHTML             = 'Isotacas.'
      c_fill_3.innerHTML             = 'Isósceles.'
      c_fill_4.innerHTML             = 'Isoclínicas.'
      set_nav = nav_user_answers[15]
      if ( set_nav.indexOf("op1") != -1 )
        btn16_op1.checked = true
      
      if ( set_nav.indexOf("op2") != -1 )
        btn16_op2.checked = true
    
      if ( set_nav.indexOf("op3") != -1 )
        btn16_op3.checked = true
    
      if ( set_nav.indexOf("op4") != -1 )
        btn16_op4.checked = true
      break;
        
    case 17:
      fill_question_header.innerHTML = '17. Numa projeção com escala 1:500.000, 22,5 KM representam:'
      c_fill_1.innerHTML             = '3,9cm'
      c_fill_2.innerHTML             = '4,1cm'
      c_fill_3.innerHTML             = '4,3cm'
      c_fill_4.innerHTML             = '4,5cm'
      set_nav = nav_user_answers[16]
      if ( set_nav.indexOf("op1") != -1 )
        btn17_op1.checked = true
      
      if ( set_nav.indexOf("op2") != -1 )
        btn17_op2.checked = true
    
      if ( set_nav.indexOf("op3") != -1 )
        btn17_op3.checked = true
    
      if ( set_nav.indexOf("op4") != -1 )
        btn17_op4.checked = true
      break;
        
    case 18:
      fill_question_header.innerHTML = '18. A DLO dos pontos (014 graus 15 min E / 014 graus 09 min W) e a DLA dos pontos (90 graus N / 90 graus S) são, respectivamente:'
      c_fill_1.innerHTML             = '(000 grau 04 min) e (00 grau)'
      c_fill_2.innerHTML             = '(028 graus 24 min) e (00 grau)'
      c_fill_3.innerHTML             = '(000 grau 04 min) e (180 graus)'
      c_fill_4.innerHTML             = '(018 graus 24 min) e (180 graus)'
      set_nav = nav_user_answers[17]
      if ( set_nav.indexOf("op1") != -1 )
        btn18_op1.checked = true
      
      if ( set_nav.indexOf("op2") != -1 )
        btn18_op2.checked = true
    
      if ( set_nav.indexOf("op3") != -1 )
        btn18_op3.checked = true
    
      if ( set_nav.indexOf("op4") != -1 )
        btn18_op4.checked = true
      break; 
        
    case 19:
      fill_question_header.innerHTML = '19. Em greenwich, o relógio marca 12H 29MIN, em um lugar de coordenadas 40ºS / 045ºW a hora legal é:'
      c_fill_1.innerHTML             = '09H 29MIN'
      c_fill_2.innerHTML             = '09H 49MIN'
      c_fill_3.innerHTML             = '15H 09MIN'
      c_fill_4.innerHTML             = '15H 29MIN'
      set_nav = nav_user_answers[18]
      if ( set_nav.indexOf("op1") != -1 )
        btn19_op1.checked = true
      
      if ( set_nav.indexOf("op2") != -1 )
        btn19_op2.checked = true
    
      if ( set_nav.indexOf("op3") != -1 )
        btn19_op3.checked = true
    
      if ( set_nav.indexOf("op4") != -1 )
        btn19_op4.checked = true
      break; 
        
    case 20:
      fill_question_header.innerHTML = '20. Considerando-se a PV maior do que o RV e a VA maior do que a VS chega-se a conclusão de que o vento está atuando pela:'
      c_fill_1.innerHTML             = 'Direita e de proa.'
      c_fill_2.innerHTML             = 'Direita e de cauda.'
      c_fill_3.innerHTML             = 'Esquerda e de proa.'
      c_fill_4.innerHTML             = 'Esquerda e de cauda.'
      set_nav = nav_user_answers[19]
      if ( set_nav.indexOf("op1") != -1 )
        btn20_op1.checked = true
      
      if ( set_nav.indexOf("op2") != -1 )
        btn20_op2.checked = true
    
      if ( set_nav.indexOf("op3") != -1 )
        btn20_op3.checked = true
    
      if ( set_nav.indexOf("op4") != -1 )
        btn20_op4.checked = true
      break;  

    default:
      alert('Something went wrong!')
  }
}

//MET QUESTIONS
function met_call(question_btn){
  c_op1.checked = false
  c_op2.checked = false
  c_op3.checked = false
  c_op4.checked = false
  button_that_clicked = window.event.target.id
  c_op1.setAttribute('id', `${button_that_clicked}_op1`)
  c_op2.setAttribute('id', `${button_that_clicked}_op2`)
  c_op3.setAttribute('id', `${button_that_clicked}_op3`)
  c_op4.setAttribute('id', `${button_that_clicked}_op4`)

  c_op1.setAttribute('oninput', `met_question_check()`)
  c_op2.setAttribute('oninput', `met_question_check()`)
  c_op3.setAttribute('oninput', `met_question_check()`)
  c_op4.setAttribute('oninput', `met_question_check()`)
  var set_met
  switch (question_btn){
    case 1:
      fill_question_header.innerHTML = '1. DENTRE AS ALTERNATIVAS RELACIONADAS ABAIXO, INDIQUE A QUE CONTENHA UMA DAS CONSEQÜÊNCIAS QUANDO OCORRE A IGUALDADE ENTRE A TEMPERATURA DO AR E A DO PONTO DE ORVALHO:'
      c_fill_1.innerHTML             = 'VENTOS FORTES'
      c_fill_2.innerHTML             = 'SATURAÇÂO DO AR'
      c_fill_3.innerHTML             = 'ARIDEZ DA ATMOSFERA'
      c_fill_4.innerHTML             = 'FORMAÇAO DE NÉVOA SECA'
      set_met = met_user_answers[0]
      if ( set_met.indexOf("op1") != -1 ){
        btn1_op1.checked = true
      }
      if ( set_met.indexOf("op2") != -1 )
        btn1_op2.checked = true
    
      if ( set_met.indexOf("op3") != -1 )
        btn1_op3.checked = true
    
      if ( set_met.indexOf("op4") != -1 )
        btn1_op4.checked = true
      break;
      
    case 2:
      fill_question_header.innerHTML = '2. NO TAF SBUL 041200Z 0418/0506 24010KT 5000 TSU SCT015 FEW030CB BKN090 TX26/0418Z TN20/0506Z BECMG 0422/0500 19010KT 9000 SCT020 BKNIOO, PREVIU-SE:'
      c_fill_1.innerHTML             = 'TEMPERATURA MÁXIMA ÀS 0800Z'
      c_fill_2.innerHTML             = 'TROVOADA SEM PRECIPITAÇÃO ATÉ AS 2200Z'
      c_fill_3.innerHTML             = 'ATMOSFERA AGITADA, EM FUNÇÃO DE NUVENS PESADAS, ATÉ AS 2200Z'
      c_fill_4.innerHTML             = 'VARIAÇÕES INSIGNIFICANTES NA VISIBILIDADE HORIZONTAL APÓS AS 2400Z'
      set_met = met_user_answers[1]
      if ( set_met.indexOf("op1") != -1 ){
        btn2_op1.checked = true
      }
      if ( set_met.indexOf("op2") != -1 )
        btn2_op2.checked = true
    
      if ( set_met.indexOf("op3") != -1 )
        btn2_op3.checked = true
    
      if ( set_met.indexOf("op4") != -1 )
        btn2_op4.checked = true
      break;
      
    case 3:
      fill_question_header.innerHTML = '3. NO METAR SBKP 101800Z 30020KT SCT005 OVCIOO 25/20 Q1020, TEM-SE :'
      c_fill_1.innerHTML             = 'PRECIPITAÇÃO DE LEVE A MODERADA '
      c_fill_2.innerHTML             = 'VENTO PROVENIENTE DO PONTO CARDEAL SUDESTE '
      c_fill_3.innerHTML             = 'TURBULÊNCIA EM FUNÇÃO DE GRANDES CUMULUS EMBUTIDOS '
      c_fill_4.innerHTML             = 'NEBULOSIDADE DO ESTÁGIO BAIXO, A 150 METROS DE ALTURA'
      set_met = met_user_answers[2]
      if ( set_met.indexOf("op1") != -1 ){
        btn3_op1.checked = true
      }
      if ( set_met.indexOf("op2") != -1 )
        btn3_op2.checked = true
    
      if ( set_met.indexOf("op3") != -1 )
        btn3_op3.checked = true
    
      if ( set_met.indexOf("op4") != -1 )
        btn3_op4.checked = true
      break; 
      
    case 4:
      fill_question_header.innerHTML = '4. DENTRE OS GRADIENTES TÉRMICOS RELACIONADOS ABAIXO, INDIQUE O QUE É CAPAZ DE PRODUZIR TURBULÊNCIA, SIMULTANEAMENTE, DENTRO E FORA DAS NUVENS DE ORIGEM CONVECTIVA:'
      c_fill_1.innerHTML             = 'Entre 0,1 grau C/100M e 0,2 graus C/100M'
      c_fill_2.innerHTML             = 'Entre 0,2 graus C/100M e 0,6 graus C/100M'
      c_fill_3.innerHTML             = 'Entre 0,6 grau C/100M e 0,9 graus C/100M'
      c_fill_4.innerHTML             = 'Entre 1,1 grau C/100M e 1,5 graus C/100M'
      set_met = met_user_answers[3]
      if ( set_met.indexOf("op1") != -1 ){
        btn4_op1.checked = true
      }
      if ( set_met.indexOf("op2") != -1 )
        btn4_op2.checked = true
    
      if ( set_met.indexOf("op3") != -1 )
        btn4_op3.checked = true
    
      if ( set_met.indexOf("op4") != -1 )
        btn4_op4.checked = true
      break; 
      
    case 5:
      fill_question_header.innerHTML = '5. UMA CONDIÇÃO RELACIONADA COM O NEVOEIRO É:'
      c_fill_1.innerHTML             = 'STRATOCUMULAS A 450M'
      c_fill_2.innerHTML             = 'UMIDADE RELATIVA IGUAL A 80%'
      c_fill_3.innerHTML             = 'VISBLIDADE HORIZONTAL IRRESTRITA'
      c_fill_4.innerHTML             = 'TEMPERATURA DO AR IGUAL A DO PONTO DE ORVALHO'
      set_met = met_user_answers[4]
      if ( set_met.indexOf("op1") != -1 ){
        btn5_op1.checked = true
      }
      if ( set_met.indexOf("op2") != -1 )
        btn5_op2.checked = true
    
      if ( set_met.indexOf("op3") != -1 )
        btn5_op3.checked = true
    
      if ( set_met.indexOf("op4") != -1 )
        btn5_op4.checked = true
      break;  

    case 6:
      fill_question_header.innerHTML = '6. O ALCANCE VISUAL DA PISTA (RVR) É OBTIDO:'
      c_fill_1.innerHTML             = 'VISUALMENTE.'
      c_fill_2.innerHTML             = 'ELETRONICAMENTE.'
      c_fill_3.innerHTML             = 'POR DERIVAÇÃO TABELAR.'
      c_fill_4.innerHTML             = 'COM BASE EM COMPARAÇÃO TOPOGRÁFICA'
      set_met = met_user_answers[5]
      if ( set_met.indexOf("op1") != -1 ){
        btn6_op1.checked = true
      }
      if ( set_met.indexOf("op2") != -1 )
        btn6_op2.checked = true
    
      if ( set_met.indexOf("op3") != -1 )
        btn6_op3.checked = true
    
      if ( set_met.indexOf("op4") != -1 )
        btn6_op4.checked = true
      break;
        
    case 7: 
      fill_question_header.innerHTML = '7. A TROPOPAUSA APRESENTA A SUA TEMPERATURA MAIS BAIXA, SOBRE:'
      c_fill_1.innerHTML             = 'OS PÓLOS '
      c_fill_2.innerHTML             = 'O EQUADOR'
      c_fill_3.innerHTML             = 'A LATITUDE TROPICAL'
      c_fill_4.innerHTML             = 'AS LATITUDES TEMPERADAS'
      set_met = met_user_answers[6]
      if ( set_met.indexOf("op1") != -1 ){
        btn7_op1.checked = true
      }
      if ( set_met.indexOf("op2") != -1 )
        btn7_op2.checked = true
    
      if ( set_met.indexOf("op3") != -1 )
        btn7_op3.checked = true
    
      if ( set_met.indexOf("op4") != -1 )
        btn7_op4.checked = true
      break;
        
    case 8:
      fill_question_header.innerHTML = '8. A FORMA DE PROPAGAÇÃO DE CALOR CAPAZ DE PRODUZIR CORRENTES NA ATMOSFERA DENOMINA-SE:'
      c_fill_1.innerHTML             = 'RADIAÇÃO'
      c_fill_2.innerHTML             = 'CONDUÇÃO'
      c_fill_3.innerHTML             = 'ADVECÇÃO'
      c_fill_4.innerHTML             = 'CONVECÇÃO'
      set_met = met_user_answers[7]
      if ( set_met.indexOf("op1") != -1 ){
        btn8_op1.checked = true
      }
      if ( set_met.indexOf("op2") != -1 )
        btn8_op2.checked = true
    
      if ( set_met.indexOf("op3") != -1 )
        btn8_op3.checked = true
    
      if ( set_met.indexOf("op4") != -1 )
        btn8_op4.checked = true
      break; 
        
    case 9:
      fill_question_header.innerHTML = '9. DENTRE OS FENÓMENOS ABAIXO, INDIQUE O QUE É INCOMPATÍVEL COM AS TROVOADAS:'
      c_fill_1.innerHTML             = 'CHUVA'
      c_fill_2.innerHTML             = 'SARAIVA'
      c_fill_3.innerHTML             = 'NEVOEIRO'
      c_fill_4.innerHTML             = 'TURBLÊNCIA'
      set_met = met_user_answers[8]
      if ( set_met.indexOf("op1") != -1 ){
        btn9_op1.checked = true
      }
      if ( set_met.indexOf("op2") != -1 )
        btn9_op2.checked = true
    
      if ( set_met.indexOf("op3") != -1 )
        btn9_op3.checked = true
    
      if ( set_met.indexOf("op4") != -1 )
        btn9_op4.checked = true
      break; 
        
    case 10:
      fill_question_header.innerHTML = '10. A FORMAÇÃO DE UMA NUVEM É UM RELATO FIEL DA ESTABILIDADE OU INSTABILIDADE DA ATMOSFERA. CONSIDERANDO ESSE CONHECIMENTO ADQUIRIDO NAS AULAS DE METEOROLOGIAAERONÁUTICA NO AEROCLUBE, UM PILOTO, AO PREENCHER UM PLANO DE VOO E RECEBER A INFORMAÇÃO DO OPERADOR DO CENTRO METEOROLÓGICO DE QUE A ENTRADA DE UMA FRENTE FRIA ESTÁ OCASIONANDO INSTABILIDADE DO AR NO AERÓDROMO DE DESTINO, ELE PODE CONCLUIR QUE DEVE ENCONTRAR NO AERÓDROMO DE DESTINO '
      c_fill_1.innerHTML             = 'NUVENS COM POUCO DESENVOLVIMENTO VERTICAL'
      c_fill_2.innerHTML             = 'NUNVENS PLANAS EM CAMADAS'
      c_fill_3.innerHTML             = 'NUNVENS COM APARÊNCIA DE UM LENÇOL'
      c_fill_4.innerHTML             = 'NUNVENS ASSOCIADAS A CORRENTES CONVECTIVAS DE AR'
      set_met = met_user_answers[9]
      if ( set_met.indexOf("op1") != -1 ){
        btn10_op1.checked = true
      }
      if ( set_met.indexOf("op2") != -1 )
        btn10_op2.checked = true
    
      if ( set_met.indexOf("op3") != -1 )
        btn10_op3.checked = true
    
      if ( set_met.indexOf("op4") != -1 )
        btn10_op4.checked = true
      break;  

    case 11:
      fill_question_header.innerHTML = '11.  A LETRA QUE DESIGNA O VENTO DE RAJADA, NO METAR, É A: '
      c_fill_1.innerHTML             = 'G'
      c_fill_2.innerHTML             = 'K'
      c_fill_3.innerHTML             = 'T'
      c_fill_4.innerHTML             = 'V'
      set_met = met_user_answers[10]
      if ( set_met.indexOf("op1") != -1 ){
        btn11_op1.checked = true
      }
      if ( set_met.indexOf("op2") != -1 )
        btn11_op2.checked = true
    
      if ( set_met.indexOf("op3") != -1 )
        btn11_op3.checked = true
    
      if ( set_met.indexOf("op4") != -1 )
        btn11_op4.checked = true
      break;
      
    case 12:
      fill_question_header.innerHTML = '12. A CONDENSAÇÃO DO VAPOR DE ÁGUA É POSSÍVEL QUANDO ACONTECE SEU RESFRIAMENTO E HÁ'
      c_fill_1.innerHTML             = 'NÚCLEOS DE CONDENSAÇÃO.'
      c_fill_2.innerHTML             = 'DIMINUIÇÃO DA TEMPERATURA DO AR.'
      c_fill_3.innerHTML             = 'DIMINUIÇÃO DA DENSIDADE DO AR'
      c_fill_4.innerHTML             = 'DIMINUIÇÃO DA PRESSÃO ATMOSFÉRICA. '
      set_met = met_user_answers[11]
      if ( set_met.indexOf("op1") != -1 ){
        btn12_op1.checked = true
      }
      if ( set_met.indexOf("op2") != -1 )
        btn12_op2.checked = true
    
      if ( set_met.indexOf("op3") != -1 )
        btn12_op3.checked = true
    
      if ( set_met.indexOf("op4") != -1 )
        btn12_op4.checked = true
      break;
      
    case 13:
      fill_question_header.innerHTML = '13. A TRANSFORMAÇÃO DO VAPOR DE ÁGUA, PARA A FORMA LÍQUIDA, DENOMINA-SE:'
      c_fill_1.innerHTML             = 'SATURAÇÃO'
      c_fill_2.innerHTML             = 'SUBLIMAÇÃO'
      c_fill_3.innerHTML             = 'EVAPORAÇÃO'
      c_fill_4.innerHTML             = 'CONDENSAÇÂO'
      set_met = met_user_answers[12]
      if ( set_met.indexOf("op1") != -1 ){
        btn13_op1.checked = true
      }
      if ( set_met.indexOf("op2") != -1 )
        btn13_op2.checked = true
    
      if ( set_met.indexOf("op3") != -1 )
        btn13_op3.checked = true
    
      if ( set_met.indexOf("op4") != -1 )
        btn13_op4.checked = true
      break; 
      
    case 14:
      fill_question_header.innerHTML = '14. NO METAR SBBR 061400Z 24006KT 200V310 9999 SCT013 SCT020 BKN080 28/26 Q1013, TEM-SE:'
      c_fill_1.innerHTML             = 'BAIXA UMIDADE RELATIVA'
      c_fill_2.innerHTML             = 'VENTO COM VELOCIDADE VARIÁVEL'
      c_fill_3.innerHTML             = 'STRATOCUMULUS COMO PRIMEIRA CAMADA A 600 PÉS DE ALTURA'
      c_fill_4.innerHTML             = 'VISIBILIDADE HORIZONTAL IGUAL OU SUPERIOR A 10KM'
      set_met = met_user_answers[13]
      if ( set_met.indexOf("op1") != -1 ){
        btn14_op1.checked = true
      }
      if ( set_met.indexOf("op2") != -1 )
        btn14_op2.checked = true
    
      if ( set_met.indexOf("op3") != -1 )
        btn14_op3.checked = true
    
      if ( set_met.indexOf("op4") != -1 )
        btn14_op4.checked = true
      break; 
      
    case 15:
      fill_question_header.innerHTML = '15. A INFORMAÇÃO DA PRESSÃO ATMOSFÉRICA, CONSTANTE NOS METAR REFERE-SE AO:'
      c_fill_1.innerHTML             = 'QNE'
      c_fill_2.innerHTML             = 'QNH'
      c_fill_3.innerHTML             = 'QFF'
      c_fill_4.innerHTML             = 'QFE'
      set_met = met_user_answers[14]
      if ( set_met.indexOf("op1") != -1 ){
        btn15_op1.checked = true
      }
      if ( set_met.indexOf("op2") != -1 )
        btn15_op2.checked = true
    
      if ( set_met.indexOf("op3") != -1 )
        btn15_op3.checked = true
    
      if ( set_met.indexOf("op4") != -1 )
        btn15_op4.checked = true
      break;  

    case 16:
      fill_question_header.innerHTML = '16. A IGUALDADE QNH=QFE SIGNIFICA QUE:'
      c_fill_1.innerHTML             = 'O VENTO A SUPERFÍCIE TENDE A CALMO'
      c_fill_2.innerHTML             = 'APROXIMA-SE UM SISTEMA FRONTAL OCLUSO'
      c_fill_3.innerHTML             = 'NÍVEL DA PISTA DO AERÓDROMO COINCIDE COM O MAR '
      c_fill_4.innerHTML             = 'GRANDE QUANTIDADE DE PARTICULA HIGROSCOPICA NO AR '
      set_met = met_user_answers[15]
      if ( set_met.indexOf("op1") != -1 ){
        btn16_op1.checked = true
      }
      if ( set_met.indexOf("op2") != -1 )
        btn16_op2.checked = true
    
      if ( set_met.indexOf("op3") != -1 )
        btn16_op3.checked = true
    
      if ( set_met.indexOf("op4") != -1 )
        btn16_op4.checked = true
      break;
        
    case 17:
      fill_question_header.innerHTML = '17. DENTRE OS TIPOS DE NUVENS RELACIONADOS ABAIXO, INDIQUE O QUE PODE GERAR TURBULÊNCIA EM SEU INTERIOR.'
      c_fill_1.innerHTML             = 'CIRRUS'
      c_fill_2.innerHTML             = 'STRATUS'
      c_fill_3.innerHTML             = 'ALTOCUMULUS'
      c_fill_4.innerHTML             = 'ALTOSTRATUS '
      set_met = met_user_answers[16]
      if ( set_met.indexOf("op1") != -1 ){
        btn17_op1.checked = true
      }
      if ( set_met.indexOf("op2") != -1 )
        btn17_op2.checked = true
    
      if ( set_met.indexOf("op3") != -1 )
        btn17_op3.checked = true
    
      if ( set_met.indexOf("op4") != -1 )
        btn17_op4.checked = true
      break;
        
    case 18:
      fill_question_header.innerHTML = '18. UMA DAS CARACTERÍSTICAS DO NEVOEIRO É '
      c_fill_1.innerHTML             = 'MÉDIOS CUMULUS'
      c_fill_2.innerHTML             = 'MODERADAS CORTANTES DE VENTO.'
      c_fill_3.innerHTML             = 'Oferecer instabilidade atmosférica.'
      c_fill_4.innerHTML             = 'RESTRINGIR A VISIBILIDADE HORIZONTAL'
      set_met = met_user_answers[17]
      if ( set_met.indexOf("op1") != -1 ){
        btn18_op1.checked = true
      }
      if ( set_met.indexOf("op2") != -1 )
        btn18_op2.checked = true
    
      if ( set_met.indexOf("op3") != -1 )
        btn18_op3.checked = true
    
      if ( set_met.indexOf("op4") != -1 )
        btn18_op4.checked = true
      break; 
        
    case 19:
      fill_question_header.innerHTML = '19. FAZEM PARTE DA CIRCULAÇÃO SECUNDÁRIA OS VENTOS:'
      c_fill_1.innerHTML             = 'DE BRISA'
      c_fill_2.innerHTML             = 'GRADIENTES'
      c_fill_3.innerHTML             = 'SUPERIORES'
      c_fill_4.innerHTML             = 'GEOSTRÓFICOS'
      set_met = met_user_answers[18]
      if ( set_met.indexOf("op1") != -1 ){
        btn19_op1.checked = true
      }
      if ( set_met.indexOf("op2") != -1 )
        btn19_op2.checked = true
    
      if ( set_met.indexOf("op3") != -1 )
        btn19_op3.checked = true
    
      if ( set_met.indexOf("op4") != -1 )
        btn19_op4.checked = true
      break; 
        
    case 20:
      fill_question_header.innerHTML = '20. Em relação ao erro altimétrico, as condições mais críticas para o voo, resultando em insegurança, são aquelas em que ocorrem pressões'
      c_fill_1.innerHTML             = 'E TEMPERATURAS BAIXAS.'
      c_fill_2.innerHTML             = 'E TEMPERATURAS ELEVADAS'
      c_fill_3.innerHTML             = 'BAIXAS E TEMPERATURAS ELEVADAS'
      c_fill_4.innerHTML             = 'ELEVADAS E TEMPERATURAS BAIXAS'
      set_met = met_user_answers[19]
      if ( set_met.indexOf("op1") != -1 ){
        btn20_op1.checked = true
      }
      if ( set_met.indexOf("op2") != -1 )
        btn20_op2.checked = true
    
      if ( set_met.indexOf("op3") != -1 )
        btn20_op3.checked = true
    
      if ( set_met.indexOf("op4") != -1 )
        btn20_op4.checked = true
      break;  

    default:
      alert('Something went wrong!')
  }
}

//CT QUESTIONS
function ct_call(question_btn){
  c_op1.checked = false
  c_op2.checked = false
  c_op3.checked = false
  c_op4.checked = false
  button_that_clicked = window.event.target.id
  c_op1.setAttribute('id', `${button_that_clicked}_op1`)
  c_op2.setAttribute('id', `${button_that_clicked}_op2`)
  c_op3.setAttribute('id', `${button_that_clicked}_op3`)
  c_op4.setAttribute('id', `${button_that_clicked}_op4`)

  c_op1.setAttribute('oninput', `ct_question_check()`)
  c_op2.setAttribute('oninput', `ct_question_check()`)
  c_op3.setAttribute('oninput', `ct_question_check()`)
  c_op4.setAttribute('oninput', `ct_question_check()`)
  var set_ct
  switch (question_btn){
    case 1:
      fill_question_header.innerHTML = '1. Se, durante o funcionamento normal do motor o filtro de óleo vier a ficar obstruído, o(a):'
      c_fill_1.innerHTML             = 'Motor apagar-se-á.'
      c_fill_2.innerHTML             = 'Válvula By-Pass fechar-se-á.'
      c_fill_3.innerHTML             = 'Motor funcionará com o óleo contaminado.'
      c_fill_4.innerHTML             = 'Válvula reguladora de pressão abrir-se-á'
      set_ct = ct_user_answers[0]
      if ( set_ct.indexOf("op1") != -1 ){
        btn1_op1.checked = true
      }
      if ( set_ct.indexOf("op2") != -1 )
        btn1_op2.checked = true
    
      if ( set_ct.indexOf("op3") != -1 )
        btn1_op3.checked = true
    
      if ( set_ct.indexOf("op4") != -1 )
        btn1_op4.checked = true
      break;
      
    case 2:
      fill_question_header.innerHTML = '2. O motor aeronáutico que desenvolver 150 HP de potência e pesa 120 KG possui relação massa-potência equivalente a:'
      c_fill_1.innerHTML             = '0,8 KG/HP.'
      c_fill_2.innerHTML             = '8,0 KG/HP.'
      c_fill_3.innerHTML             = '2,7 KG/HP.'
      c_fill_4.innerHTML             = '27,0 KG/HP.'
      set_ct = ct_user_answers[1]
      if ( set_ct.indexOf("op1") != -1 ){
        btn2_op1.checked = true
      }
      if ( set_ct.indexOf("op2") != -1 )
        btn2_op2.checked = true
    
      if ( set_ct.indexOf("op3") != -1 )
        btn2_op3.checked = true
    
      if ( set_ct.indexOf("op4") != -1 )
        btn2_op4.checked = true
      break;
      
    case 3:
      fill_question_header.innerHTML = '3. Os passos da hélice que proporconam redução do arrasto da hélice quando o motor é cortado em voo e redução da distância percorrida durante o pouso são denominados, respectivamente:'
      c_fill_1.innerHTML             = 'Mínimo e máximo.'
      c_fill_2.innerHTML             = 'Máximo e reverso.'
      c_fill_3.innerHTML             = 'Mínimo e bandeira.'
      c_fill_4.innerHTML             = 'Bandeira e reverso.'
      set_ct = ct_user_answers[2]
      if ( set_ct.indexOf("op1") != -1 ){
        btn3_op1.checked = true
      }
      if ( set_ct.indexOf("op2") != -1 )
        btn3_op2.checked = true
    
      if ( set_ct.indexOf("op3") != -1 )
        btn3_op3.checked = true
    
      if ( set_ct.indexOf("op4") != -1 )
        btn3_op4.checked = true
      break; 
      
    case 4:
      fill_question_header.innerHTML = '4. Os tacômetros mecânicos tem o seu princípio de funcionamento baseado na:'
      c_fill_1.innerHTML             = 'Força centrípeta.'
      c_fill_2.innerHTML             = 'Força centrífuga.'
      c_fill_3.innerHTML             = 'Rigidez giroscópica.'
      c_fill_4.innerHTML             = 'Precessão giroscópica.'
      set_ct = ct_user_answers[3]
      if ( set_ct.indexOf("op1") != -1 ){
        btn4_op1.checked = true
      }
      if ( set_ct.indexOf("op2") != -1 )
        btn4_op2.checked = true
    
      if ( set_ct.indexOf("op3") != -1 )
        btn4_op3.checked = true
    
      if ( set_ct.indexOf("op4") != -1 )
        btn4_op4.checked = true
      break;
      
    case 5:
      fill_question_header.innerHTML = '5. A finalidade da boia nos carburadores é de:'
      c_fill_1.innerHTML             = 'Acionar o pulverizador através da borboleta.'
      c_fill_2.innerHTML             = 'Manter constante o nível de gasolina na cuba.'
      c_fill_3.innerHTML             = 'Acionar o giclê para a passagem da gasolina.'
      c_fill_4.innerHTML             = 'Compensar a mistura em função da variação da altitude.'
      set_ct = ct_user_answers[4]
      if ( set_ct.indexOf("op1") != -1 ){
        btn5_op1.checked = true
      }
      if ( set_ct.indexOf("op2") != -1 )
        btn5_op2.checked = true
    
      if ( set_ct.indexOf("op3") != -1 )
        btn5_op3.checked = true
    
      if ( set_ct.indexOf("op4") != -1 )
        btn5_op4.checked = true
      break;  

    case 6:
      fill_question_header.innerHTML = '6. Dentre os instrumentos abaixo, indique aqueles que pertencem ao sistema de navegação:'
      c_fill_1.innerHTML             = 'Velocímetro e altímetro.'
      c_fill_2.innerHTML             = 'Altímetro e cronômetro.'
      c_fill_3.innerHTML             = 'Velocímetro e bússola.'
      c_fill_4.innerHTML             = 'Cronômetro e bússola.'
      set_ct = ct_user_answers[5]
      if ( set_ct.indexOf("op1") != -1 ){
        btn6_op1.checked = true
      }
      if ( set_ct.indexOf("op2") != -1 )
        btn6_op2.checked = true
    
      if ( set_ct.indexOf("op3") != -1 )
        btn6_op3.checked = true
    
      if ( set_ct.indexOf("op4") != -1 )
        btn6_op4.checked = true
      break;
        
    case 7: 
      fill_question_header.innerHTML = '7. Em um motor convencional a quatro tempos, se a válvula de escapamento estiver aberta e válvula de admissão fechada, o pistão estará teoricamente no tempo de:'
      c_fill_1.innerHTML             = 'Admissão.'
      c_fill_2.innerHTML             = 'Expansão.'
      c_fill_3.innerHTML             = 'Compressão.'
      c_fill_4.innerHTML             = 'Escapamento.'
      set_ct = ct_user_answers[6]
      if ( set_ct.indexOf("op1") != -1 ){
        btn7_op1.checked = true
      }
      if ( set_ct.indexOf("op2") != -1 )
        btn7_op2.checked = true
    
      if ( set_ct.indexOf("op3") != -1 )
        btn7_op3.checked = true
    
      if ( set_ct.indexOf("op4") != -1 )
        btn7_op4.checked = true
      break;
        
    case 8:
      fill_question_header.innerHTML = '8. O dispositivo que impede a corrente da bateria de fluir no sentido do gerador denomina-se:'
      c_fill_1.innerHTML             = 'Alternador.'
      c_fill_2.innerHTML             = 'Transformador.'
      c_fill_3.innerHTML             = 'Regulador de voltagem.'
      c_fill_4.innerHTML             = 'Relé de corrente reversa.'
      set_ct = ct_user_answers[7]
      if ( set_ct.indexOf("op1") != -1 ){
        btn8_op1.checked = true
      }
      if ( set_ct.indexOf("op2") != -1 )
        btn8_op2.checked = true
    
      if ( set_ct.indexOf("op3") != -1 )
        btn8_op3.checked = true
    
      if ( set_ct.indexOf("op4") != -1 )
        btn8_op4.checked = true
      break; 
        
    case 9:
      fill_question_header.innerHTML = '9. Os cabos de aço esticados em diagonais que suportam esforços de tração em uma asa são denominados:'
      c_fill_1.innerHTML             = 'Nervuras.'
      c_fill_2.innerHTML             = 'Tirantes.'
      c_fill_3.innerHTML             = 'Montantes.'
      c_fill_4.innerHTML             = 'Longarinas.'
      set_ct = ct_user_answers[8]
      if ( set_ct.indexOf("op1") != -1 ){
        btn9_op1.checked = true
      }
      if ( set_ct.indexOf("op2") != -1 )
        btn9_op2.checked = true
    
      if ( set_ct.indexOf("op3") != -1 )
        btn9_op3.checked = true
    
      if ( set_ct.indexOf("op4") != -1 )
        btn9_op4.checked = true
      break; 
        
    case 10:
      fill_question_header.innerHTML = '10. O componente do sistema de combustível que tem a finalidade de prover combustível para a bomba mecânica é o(a):'
      c_fill_1.innerHTML             = 'Filtro.'
      c_fill_2.innerHTML             = 'Bomba auxiliar.'
      c_fill_3.innerHTML             = 'Válvula seletora.'
      c_fill_4.innerHTML             = 'Sensor de baixo nível.'
      set_ct = ct_user_answers[9]
      if ( set_ct.indexOf("op1") != -1 ){
        btn10_op1.checked = true
      }
      if ( set_ct.indexOf("op2") != -1 )
        btn10_op2.checked = true
    
      if ( set_ct.indexOf("op3") != -1 )
        btn10_op3.checked = true
    
      if ( set_ct.indexOf("op4") != -1 )
        btn10_op4.checked = true
      break;  

    case 11:
      fill_question_header.innerHTML = '11. O componente do motor que conecta o pistão ao eixo de manivelas denomina-se:'
      c_fill_1.innerHTML             = 'Biela.'
      c_fill_2.innerHTML             = 'Cárter.'
      c_fill_3.innerHTML             = 'Anel de segmento.'
      c_fill_4.innerHTML             = 'Válvula de admissão.'
      set_ct = ct_user_answers[10]
      if ( set_ct.indexOf("op1") != -1 ){
        btn11_op1.checked = true
      }
      if ( set_ct.indexOf("op2") != -1 )
        btn11_op2.checked = true
    
      if ( set_ct.indexOf("op3") != -1 )
        btn11_op3.checked = true
    
      if ( set_ct.indexOf("op4") != -1 )
        btn11_op4.checked = true
      break;
      
    case 12:
      fill_question_header.innerHTML = '12. Para o seu funcionamento, o tacômryto elétrico recebe: sinal de um:'
      c_fill_1.innerHTML             = 'Gerador.'
      c_fill_2.innerHTML             = 'Amperímetro.'
      c_fill_3.innerHTML             = 'Contra-peso.'
      c_fill_4.innerHTML             = 'Sensor de RPM.'
      set_ct = ct_user_answers[11]
      if ( set_ct.indexOf("op1") != -1 ){
        btn12_op1.checked = true
      }
      if ( set_ct.indexOf("op2") != -1 )
        btn12_op2.checked = true
    
      if ( set_ct.indexOf("op3") != -1 )
        btn12_op3.checked = true
    
      if ( set_ct.indexOf("op4") != -1 )
        btn12_op4.checked = true
      break;
      
    case 13:
      fill_question_header.innerHTML = '13. No modo de fixação das asas, o tipo cantilever tem as versões:'
      c_fill_1.innerHTML             = 'Alta e média.'
      c_fill_2.innerHTML             = 'Baixa e média.'
      c_fill_3.innerHTML             = 'Alta e parassol.'
      c_fill_4.innerHTML             = 'Baixa e parassol.'
      set_ct = ct_user_answers[12]
      if ( set_ct.indexOf("op1") != -1 ){
        btn13_op1.checked = true
      }
      if ( set_ct.indexOf("op2") != -1 )
        btn13_op2.checked = true
    
      if ( set_ct.indexOf("op3") != -1 )
        btn13_op3.checked = true
    
      if ( set_ct.indexOf("op4") != -1 )
        btn13_op4.checked = true
      break; 
      
    case 14:
      fill_question_header.innerHTML = '14. O esforço de compressão e o de tração atuando simultaneamente em uma estrutura produzem:'
      c_fill_1.innerHTML             = 'Flexão.'
      c_fill_2.innerHTML             = 'Tensão.'
      c_fill_3.innerHTML             = 'Torção.'
      c_fill_4.innerHTML             = 'Cizalhamento.'
      set_ct = ct_user_answers[13]
      if ( set_ct.indexOf("op1") != -1 ){
        btn14_op1.checked = true
      }
      if ( set_ct.indexOf("op2") != -1 )
        btn14_op2.checked = true
    
      if ( set_ct.indexOf("op3") != -1 )
        btn14_op3.checked = true
    
      if ( set_ct.indexOf("op4") != -1 )
        btn14_op4.checked = true
      break; 
      
    case 15:
      fill_question_header.innerHTML = '15. O sistema de lubrificação do motor em que o próprio cárter serve de reservatório de oléo é do tipo:'
      c_fill_1.innerHTML             = 'Seco.'
      c_fill_2.innerHTML             = 'Úmido.'
      c_fill_3.innerHTML             = 'Misto.'
      c_fill_4.innerHTML             = 'Molhado.'
      set_ct = ct_user_answers[14]
      if ( set_ct.indexOf("op1") != -1 ){
        btn15_op1.checked = true
      }
      if ( set_ct.indexOf("op2") != -1 )
        btn15_op2.checked = true
    
      if ( set_ct.indexOf("op3") != -1 )
        btn15_op3.checked = true
    
      if ( set_ct.indexOf("op4") != -1 )
        btn15_op4.checked = true
      break;  

    case 16:
      fill_question_header.innerHTML = '16. Na bateria do tipo chumbo-ácida as placas de chumbo são mergulhadas numa solução de:'
      c_fill_1.innerHTML             = 'Metanol.'
      c_fill_2.innerHTML             = 'Querosene.'
      c_fill_3.innerHTML             = 'Água destilada.'
      c_fill_4.innerHTML             = 'Ácido sulfúrico.'
      set_ct = ct_user_answers[15]
      if ( set_ct.indexOf("op1") != -1 ){
        btn16_op1.checked = true
      }
      if ( set_ct.indexOf("op2") != -1 )
        btn16_op2.checked = true
    
      if ( set_ct.indexOf("op3") != -1 )
        btn16_op3.checked = true
    
      if ( set_ct.indexOf("op4") != -1 )
        btn16_op4.checked = true
      break;
        
    case 17:
      fill_question_header.innerHTML = '17. A posição atingida pelo pistão que acarreta um volume máximo no interior do cilindro denomina-se:'
      c_fill_1.innerHTML             = 'Ponto morto alto.'
      c_fill_2.innerHTML             = 'Ponto morto baixo.'
      c_fill_3.innerHTML             = 'Câmara de combustão.'
      c_fill_4.innerHTML             = 'Câmara de compressão.'
      set_ct = ct_user_answers[16]
      if ( set_ct.indexOf("op1") != -1 ){
        btn17_op1.checked = true
      }
      if ( set_ct.indexOf("op2") != -1 )
        btn17_op2.checked = true
    
      if ( set_ct.indexOf("op3") != -1 )
        btn17_op3.checked = true
    
      if ( set_ct.indexOf("op4") != -1 )
        btn17_op4.checked = true
      break;
        
    case 18:
      fill_question_header.innerHTML = '18. A capacidade que um motor possui de ter partidas satisfatórias em baixas temperaturas é devido ao combustível possuir:'
      c_fill_1.innerHTML             = 'Alta densidade.'
      c_fill_2.innerHTML             = 'Baixa densidade.'
      c_fill_3.innerHTML             = 'Alta volatilidade.'
      c_fill_4.innerHTML             = 'Baixa volatilidade.'
      set_ct = ct_user_answers[17]
      if ( set_ct.indexOf("op1") != -1 ){
        btn18_op1.checked = true
      }
      if ( set_ct.indexOf("op2") != -1 )
        btn18_op2.checked = true
    
      if ( set_ct.indexOf("op3") != -1 )
        btn18_op3.checked = true
    
      if ( set_ct.indexOf("op4") != -1 )
        btn18_op4.checked = true
      break; 
        
    case 19:
      fill_question_header.innerHTML = '19. Nos motores convencionais superalimentados o turbocompressor é acionado:'
      c_fill_1.innerHTML             = 'Pelo eixo do motor.'
      c_fill_2.innerHTML             = 'Pelo motor elétrico.'
      c_fill_3.innerHTML             = 'Por meio de difusores.'
      c_fill_4.innerHTML             = 'Por gases de escapamento.'
      set_ct = ct_user_answers[18]
      if ( set_ct.indexOf("op1") != -1 ){
        btn19_op1.checked = true
      }
      if ( set_ct.indexOf("op2") != -1 )
        btn19_op2.checked = true
    
      if ( set_ct.indexOf("op3") != -1 )
        btn19_op3.checked = true
    
      if ( set_ct.indexOf("op4") != -1 )
        btn19_op4.checked = true
      break; 
        
    case 20:
      fill_question_header.innerHTML = '20. A estabilidade lateral de uma aeronave é principalmente obtida em função da existência do(a):'
      c_fill_1.innerHTML             = 'Leme de direção.'
      c_fill_2.innerHTML             = 'leme de profundidade.'
      c_fill_3.innerHTML             = 'Estabilizador vertical.'
      c_fill_4.innerHTML             = 'Estabilizador horizontal.'
      set_ct = ct_user_answers[19]
      if ( set_ct.indexOf("op1") != -1 ){
        btn20_op1.checked = true
      }
      if ( set_ct.indexOf("op2") != -1 )
        btn20_op2.checked = true
    
      if ( set_ct.indexOf("op3") != -1 )
        btn20_op3.checked = true
    
      if ( set_ct.indexOf("op4") != -1 )
        btn20_op4.checked = true
      break;  

    default:
      alert('Something went wrong!')
  }
}

//TV QUESTIONS
function tv_call(question_btn){
  c_op1.checked = false
  c_op2.checked = false
  c_op3.checked = false
  c_op4.checked = false
  button_that_clicked = window.event.target.id
  c_op1.setAttribute('id', `${button_that_clicked}_op1`)
  c_op2.setAttribute('id', `${button_that_clicked}_op2`)
  c_op3.setAttribute('id', `${button_that_clicked}_op3`)
  c_op4.setAttribute('id', `${button_that_clicked}_op4`)

  c_op1.setAttribute('oninput', `tv_question_check()`)
  c_op2.setAttribute('oninput', `tv_question_check()`)
  c_op3.setAttribute('oninput', `tv_question_check()`)
  c_op4.setAttribute('oninput', `tv_question_check()`)
  var set_tv
  switch (question_btn){
    case 1:
      fill_question_header.innerHTML = '1. Quanto a desidade do ar, pode-se afirmar que:'
      c_fill_1.innerHTML             = 'Aumenta, com o aumento da altitude.'
      c_fill_2.innerHTML             = 'Diminui, com a diminuição da altitude.'
      c_fill_3.innerHTML             = 'Aumenta, com o aumento da temperatura'
      c_fill_4.innerHTML             = 'Diminui, com o aumento da temperatura.'
      set_tv = tv_user_answers[0]
      if ( set_tv.indexOf("op1") != -1 ){
        btn1_op1.checked = true
      }
      if ( set_tv.indexOf("op2") != -1 )
        btn1_op2.checked = true
    
      if ( set_tv.indexOf("op3") != -1 )
        btn1_op3.checked = true
    
      if ( set_tv.indexOf("op4") != -1 )
        btn1_op4.checked = true
      break;
      
    case 2:
      fill_question_header.innerHTML = '2. O ângulo de ataque no qual o aerofólio "não" produz sustentação é negativo no perfil:'
      c_fill_1.innerHTML             = 'Assimétrico e nulo no perfil simétrico.'
      c_fill_2.innerHTML             = 'Simétrico e nulo no perfil assimétrico.'
      c_fill_3.innerHTML             = 'Simétrico e positivo no perfil assimétrico.'
      c_fill_4.innerHTML             = 'Assimétrico e positivo no perfil simétrico.'
      set_tv = tv_user_answers[1]
      if ( set_tv.indexOf("op1") != -1 ){
        btn2_op1.checked = true
      }
      if ( set_tv.indexOf("op2") != -1 )
        btn2_op2.checked = true
    
      if ( set_tv.indexOf("op3") != -1 )
        btn2_op3.checked = true
    
      if ( set_tv.indexOf("op4") != -1 )
        btn2_op4.checked = true
      break;
      
    case 3:
       fill_question_header.innerHTML = '3. Diz-se que uma aeronave encontra-se no seu teto prático quando ainda tem capacidade de manter uma razão de subida máxima de:'
      c_fill_1.innerHTML             = '20FT/MIN.'
      c_fill_2.innerHTML             = '50FT/MIN.'
      c_fill_3.innerHTML             = '100FT/MIN.'
      c_fill_4.innerHTML             = '150FT/MIN.'
      set_tv = tv_user_answers[2]
      if ( set_tv.indexOf("op1") != -1 ){
        btn3_op1.checked = true
      }
      if ( set_tv.indexOf("op2") != -1 )
        btn3_op2.checked = true
    
      if ( set_tv.indexOf("op3") != -1 )
        btn3_op3.checked = true
    
      if ( set_tv.indexOf("op4") != -1 )
        btn3_op4.checked = true
      break; 
      
    case 4:
      fill_question_header.innerHTML = '4. Para recuperar o controle de um avião que entrou em parafuso o procedimento a ser realizado é:'
      c_fill_1.innerHTML             = 'Baixar todo o flap.'
      c_fill_2.innerHTML             = 'Recolher todo o flap.'
      c_fill_3.innerHTML             = 'Recolher o trem de pouso.'
      c_fill_4.innerHTML             = 'Pressionar o pedal para o lado contrário ao da rotação.'
      set_tv = tv_user_answers[3]
      if ( set_tv.indexOf("op1") != -1 ){
        btn4_op1.checked = true
      }
      if ( set_tv.indexOf("op2") != -1 )
        btn4_op2.checked = true
    
      if ( set_tv.indexOf("op3") != -1 )
        btn4_op3.checked = true
    
      if ( set_tv.indexOf("op4") != -1 )
        btn4_op4.checked = true
      break; 
      
    case 5:
      fill_question_header.innerHTML = '5. Para que uma aeronave voe com baixa velocidade são necessários:'
      c_fill_1.innerHTML             = 'Pequeno ângulo de ataque e aumento de potência.'
      c_fill_2.innerHTML             = 'Pequeno ângulo de ataque e redução de potência.'
      c_fill_3.innerHTML             = 'Grande ângulo de ataque e redução de potência.'
      c_fill_4.innerHTML             = 'Grande ângulo de ataque e aumento de potência.'
      set_tv = tv_user_answers[4]
      if ( set_tv.indexOf("op1") != -1 ){
        btn5_op1.checked = true
      }
      if ( set_tv.indexOf("op2") != -1 )
        btn5_op2.checked = true
    
      if ( set_tv.indexOf("op3") != -1 )
        btn5_op3.checked = true
    
      if ( set_tv.indexOf("op4") != -1 )
        btn5_op4.checked = true
      break;  

    case 6:
      fill_question_header.innerHTML = '6. Estando a corda do aerofólio abaixo da linha dos filetes de ar do vento relativo, o ângulo formado denomina-se ângulo de:'
      c_fill_1.innerHTML             = 'Ataque nulo.'
      c_fill_2.innerHTML             = 'Atitude nulo.'
      c_fill_3.innerHTML             = 'Ataque negativo.'
      c_fill_4.innerHTML             = 'Atitude positivo.'
      set_tv = tv_user_answers[5]
      if ( set_tv.indexOf("op1") != -1 ){
        btn6_op1.checked = true
      }
      if ( set_tv.indexOf("op2") != -1 )
        btn6_op2.checked = true
    
      if ( set_tv.indexOf("op3") != -1 )
        btn6_op3.checked = true
    
      if ( set_tv.indexOf("op4") != -1 )
        btn6_op4.checked = true
      break;
        
    case 7: 
      fill_question_header.innerHTML = '7. Dentre as alternativas abaixo, os fatores que melhoram as condições de decolagem, diminuindo a distância de corrida na pista são:'
      c_fill_1.innerHTML             = 'Baixa altitude, ar seco e vento de proa.'
      c_fill_2.innerHTML             = 'Baixa altitude, vento de cauda e ar seco.'
      c_fill_3.innerHTML             = 'Vento de proa, ar úmido e grande altitude.'
      c_fill_4.innerHTML             = 'Vento de cauda, ar úmido e grande altitude.'
      set_tv = tv_user_answers[6]
      if ( set_tv.indexOf("op1") != -1 ){
        btn7_op1.checked = true
      }
      if ( set_tv.indexOf("op2") != -1 )
        btn7_op2.checked = true
    
      if ( set_tv.indexOf("op3") != -1 )
        btn7_op3.checked = true
    
      if ( set_tv.indexOf("op4") != -1 )
        btn7_op4.checked = true
      break;
        
    case 8:
      fill_question_header.innerHTML = '8. Dentre as alternativas abaixo, é correto afirmar que a aeronave estolará quando houver:'
      c_fill_1.innerHTML             = 'Aumento da velocidade aerodinâmica.'
      c_fill_2.innerHTML             = 'Aumento do peso máximo de decolagem.'
      c_fill_3.innerHTML             = 'Perda de sustentaçâo e aumento de arrasto.'
      c_fill_4.innerHTML             = 'Diminuição da velocidade em relação ao solo.'
      set_tv = tv_user_answers[7]
      if ( set_tv.indexOf("op1") != -1 ){
        btn8_op1.checked = true
      }
      if ( set_tv.indexOf("op2") != -1 )
        btn8_op2.checked = true
    
      if ( set_tv.indexOf("op3") != -1 )
        btn8_op3.checked = true
    
      if ( set_tv.indexOf("op4") != -1 )
        btn8_op4.checked = true
      break; 
        
    case 9:
      fill_question_header.innerHTML = '9. Comandando-se o pedal para qualquer dos lados com pouca inclinação da asa poderá ocorrer um(a):'
      c_fill_1.innerHTML             = 'Derrapagem.'
      c_fill_2.innerHTML             = 'Enflechamento.'
      c_fill_3.innerHTML             = 'Efeito de quilha.'
      c_fill_4.innerHTML             = 'Parafuso acidental.'
      set_tv = tv_user_answers[8]
      if ( set_tv.indexOf("op1") != -1 ){
        btn9_op1.checked = true
      }
      if ( set_tv.indexOf("op2") != -1 )
        btn9_op2.checked = true
    
      if ( set_tv.indexOf("op3") != -1 )
        btn9_op3.checked = true
    
      if ( set_tv.indexOf("op4") != -1 )
        btn9_op4.checked = true
      break; 
        
    case 10:
      fill_question_header.innerHTML = '10. Ao se pressionar um dos pedais do leme de direção numa curva, sem antes inclinar as asas, poderá ocorrer uma:'
      c_fill_1.innerHTML             = 'Guinada.'
      c_fill_2.innerHTML             = 'Bancagem.'
      c_fill_3.innerHTML             = 'Glissada.'
      c_fill_4.innerHTML             = 'Derrapagem.'
      set_tv = tv_user_answers[9]
      if ( set_tv.indexOf("op1") != -1 ){
        btn10_op1.checked = true
      }
      if ( set_tv.indexOf("op2") != -1 )
        btn10_op2.checked = true
    
      if ( set_tv.indexOf("op3") != -1 )
        btn10_op3.checked = true
    
      if ( set_tv.indexOf("op4") != -1 )
        btn10_op4.checked = true
      break;  

    case 11:
      fill_question_header.innerHTML = '11. Considerem-se duas aeronaves do mesmo tipo, uma voando ao nível do mar e outra a 8000 FT, neste caso, a que está voando a(ao):'
      c_fill_1.innerHTML             = '8000 FT tem maior velocidade porque o ar é denso.'
      c_fill_2.innerHTML             = '8000 FT tem menor velocidade porque o ar é rarefeito.'
      c_fill_3.innerHTML             = 'Nível do mar tem menor velocidade porque o ar é denso.'
      c_fill_4.innerHTML             = 'Nível do mar tem maior velocidade porque o ar é rarefeito.'
      set_tv = tv_user_answers[10]
      if ( set_tv.indexOf("op1") != -1 ){
        btn11_op1.checked = true
      }
      if ( set_tv.indexOf("op2") != -1 )
        btn11_op2.checked = true
    
      if ( set_tv.indexOf("op3") != -1 )
        btn11_op3.checked = true
    
      if ( set_tv.indexOf("op4") != -1 )
        btn11_op4.checked = true
      break;
      
    case 12:
      fill_question_header.innerHTML = '12. Em voo reto e nivelado, para se aumentar a velocidade, a:'
      c_fill_1.innerHTML             = 'Tração deve ser igual ao arrasto.'
      c_fill_2.innerHTML             = 'Tração deve ser maior que o arrasto.'
      c_fill_3.innerHTML             = 'Sustentação deve ser igual ao arrasto.'
      c_fill_4.innerHTML             = 'Sustentação deve ser menor que o arrasto.'
      set_tv = tv_user_answers[11]
      if ( set_tv.indexOf("op1") != -1 ){
        btn12_op1.checked = true
      }
      if ( set_tv.indexOf("op2") != -1 )
        btn12_op2.checked = true
    
      if ( set_tv.indexOf("op3") != -1 )
        btn12_op3.checked = true
    
      if ( set_tv.indexOf("op4") != -1 )
        btn12_op4.checked = true
      break;
      
    case 13:
      fill_question_header.innerHTML = '13. As superfícies de comando das aeronaves proporcionam movimentos realizados em torno dos eixos imaginários, que se cruzam num ponto denominado centro de:'
      c_fill_1.innerHTML             = 'Pressão.'
      c_fill_2.innerHTML             = 'Arrasto.'
      c_fill_3.innerHTML             = 'Gravidade.'
      c_fill_4.innerHTML             = 'Turbulência.'
      set_tv = tv_user_answers[12]
      if ( set_tv.indexOf("op1") != -1 ){
        btn13_op1.checked = true
      }
      if ( set_tv.indexOf("op2") != -1 )
        btn13_op2.checked = true
    
      if ( set_tv.indexOf("op3") != -1 )
        btn13_op3.checked = true
    
      if ( set_tv.indexOf("op4") != -1 )
        btn13_op4.checked = true
      break; 
      
    case 14:
      fill_question_header.innerHTML = '14. O principal fator de sustentação é devido ao princípio de:'
      c_fill_1.innerHTML             = 'Pitot.'
      c_fill_2.innerHTML             = 'Venturi.'
      c_fill_3.innerHTML             = 'Coriólis.'
      c_fill_4.innerHTML             = 'Bernoulli.'
      set_tv = tv_user_answers[13]
      if ( set_tv.indexOf("op1") != -1 ){
        btn14_op1.checked = true
      }
      if ( set_tv.indexOf("op2") != -1 )
        btn14_op2.checked = true
    
      if ( set_tv.indexOf("op3") != -1 )
        btn14_op3.checked = true
    
      if ( set_tv.indexOf("op4") != -1 )
        btn14_op4.checked = true
      break; 
      
    case 15:
      fill_question_header.innerHTML = '15. O arrasto gerado pela própria sustentação é conhecido como arrasto:'
      c_fill_1.innerHTML             = 'Induzido.'
      c_fill_2.innerHTML             = 'Parasita.'
      c_fill_3.innerHTML             = 'Superficial.'
      c_fill_4.innerHTML             = 'Da camada limite.'
      set_tv = tv_user_answers[14]
      if ( set_tv.indexOf("op1") != -1 ){
        btn15_op1.checked = true
      }
      if ( set_tv.indexOf("op2") != -1 )
        btn15_op2.checked = true
    
      if ( set_tv.indexOf("op3") != -1 )
        btn15_op3.checked = true
    
      if ( set_tv.indexOf("op4") != -1 )
        btn15_op4.checked = true
      break;  

    case 16:
      fill_question_header.innerHTML = '16. O teorema de Bernoulli foi demonstrado no tubo:'
      c_fill_1.innerHTML             = 'Vernier.'
      c_fill_2.innerHTML             = 'Simétrico.'
      c_fill_3.innerHTML             = 'Superficial.'
      c_fill_4.innerHTML             = 'Da camada limite.'
      set_tv = tv_user_answers[15]
      if ( set_tv.indexOf("op1") != -1 ){
        btn16_op1.checked = true
      }
      if ( set_tv.indexOf("op2") != -1 )
        btn16_op2.checked = true
    
      if ( set_tv.indexOf("op3") != -1 )
        btn16_op3.checked = true
    
      if ( set_tv.indexOf("op4") != -1 )
        btn16_op4.checked = true
      break;
        
    case 17:
      fill_question_header.innerHTML = '17. A trajetória de voo tem o sentido oposto do(a):'
      c_fill_1.innerHTML             = 'Corda da asa.'
      c_fill_2.innerHTML             = 'Vento relativo.'
      c_fill_3.innerHTML             = 'Proa da aeronave.'
      c_fill_4.innerHTML             = 'Ângulo de ataque das asas.'
      set_tv = tv_user_answers[16]
      if ( set_tv.indexOf("op1") != -1 ){
        btn17_op1.checked = true
      }
      if ( set_tv.indexOf("op2") != -1 )
        btn17_op2.checked = true
    
      if ( set_tv.indexOf("op3") != -1 )
        btn17_op3.checked = true
    
      if ( set_tv.indexOf("op4") != -1 )
        btn17_op4.checked = true
      break;
        
    case 18:
      fill_question_header.innerHTML = '18. Segundo a lei dos fases, aumentando-se a pressão de uma gás, a:'
      c_fill_1.innerHTML             = 'Temperatura e a densidade diminuirão.'
      c_fill_2.innerHTML             = 'Temperatura e a densidade aumentarão.'
      c_fill_3.innerHTML             = 'Densidade diminuirá e a temperatura aumentará.'
      c_fill_4.innerHTML             = 'Densidade aumentará e a temperatura diminuirá.'
      set_tv = tv_user_answers[17]
      if ( set_tv.indexOf("op1") != -1 ){
        btn18_op1.checked = true
      }
      if ( set_tv.indexOf("op2") != -1 )
        btn18_op2.checked = true
    
      if ( set_tv.indexOf("op3") != -1 )
        btn18_op3.checked = true
    
      if ( set_tv.indexOf("op4") != -1 )
        btn18_op4.checked = true
      break; 
        
    case 19:
      fill_question_header.innerHTML = '19. Aumentando-se o ângulo de ataque além do correspondente ao coeficiente de sustentação máximo, ocorrerá um(a):'
      c_fill_1.innerHTML             = 'Queda brusca na sustentação e uma diminuição do arrasto.'
      c_fill_2.innerHTML             = 'Aumento brusco na sustentação e uma diminuição do arrasto.'
      c_fill_3.innerHTML             = 'Queda na sustentação e um grande aumento do arrasto.'
      c_fill_4.innerHTML             = 'Aumento brusco na sustentação e um grande aumento do arrasto.'
      set_tv = tv_user_answers[18]
      if ( set_tv.indexOf("op1") != -1 ){
        btn19_op1.checked = true
      }
      if ( set_tv.indexOf("op2") != -1 )
        btn19_op2.checked = true
    
      if ( set_tv.indexOf("op3") != -1 )
        btn19_op3.checked = true
    
      if ( set_tv.indexOf("op4") != -1 )
        btn19_op4.checked = true
      break; 
        
    case 20:
      fill_question_header.innerHTML = '20. A linha média imaginárioa que une o bordo de ataque ao bordo de fuga denomina-se:'
      c_fill_1.innerHTML             = 'Corda.'
      c_fill_2.innerHTML             = 'Envergadura.'
      c_fill_3.innerHTML             = 'Alongamento.'
      c_fill_4.innerHTML             = 'Linha de curvatura média.'
      set_tv = tv_user_answers[19]
      if ( set_tv.indexOf("op1") != -1 ){
        btn20_op1.checked = true
      }
      if ( set_tv.indexOf("op2") != -1 )
        btn20_op2.checked = true
    
      if ( set_tv.indexOf("op3") != -1 )
        btn20_op3.checked = true
    
      if ( set_tv.indexOf("op4") != -1 )
        btn20_op4.checked = true
      break;  

    default:
      alert('Something went wrong!')
  }
}


//SAVES USERS ANSWERS FOR EACH QUESTION IN ONE OF THE 5 SUBJECT SPECIFIC ARRAYS
var radio_that_called
var totalQuestions   = 0
var c_totalQuestions = document.getElementById('total-questions')
var elem             = document.getElementById("myBar")
var width            = 0

var r1,r2,r3,r4,r5,r6,r7,r8,r9,r10,r11,r12,r13,r14,r15,r16,r17,r18,r19,r20
var r1 = r2 = r3 = r4 = r5 = r6 = r7 = r8 = r9 = r10 = r11 = r12 = r13 = r14 = r15 = r16 = r17 = r18 = r19 = r20 = 0

var n1,n2,n3,n4,n5,n6,n7,n8,n9,n10,n11,n12,n13,n14,n15,n16,n17,n18,n19,n20
var n1 = n2 = n3 = n4 = n5 = n6 = n7 = n8 = n9 = n10 = n11 = n12 = n13 = n14 = n15 = n16 = n17 = n18 = n19 = n20 = 0

var m1,m2,m3,m4,m5,m6,m7,m8,m9,m10,m11,m12,m13,m14,m15,m16,m17,m18,m19,m20
var m1 = m2 = m3 = m4 = m5 = m6 = m7 = m8 = m9 = m10 = m11 = m12 = m13 = m14 = m15 = m16 = m17 = m18 = m19 = m20 = 0

var c1,c2,c3,c4,c5,c6,c7,c8,c9,c10,c11,c12,c13,c14,c15,c16,c17,c18,c19,c20
var c1 = c2 = c3 = c4 = c5 = c6 = c7 = c8 = c9 = c10 = c11 = c12 = c13 = c14 = c15 = c16 = c17 = c18 = c19 = c20 = 0

var t1,t2,t3,t4,t5,t6,t7,t8,t9,t10,t11,t12,t13,t14,t15,t16,t17,t18,t19,t20
var t1 = t2 = t3 = t4 = t5 = t6 = t7 = t8 = t9 = t10 = t11 = t12 = t13 = t14 = t15 = t16 = t17 = t18 = t19 = t20 = 0

function reg_question_check(){
  radio_that_called = window.event.target.id
  if ( radio_that_called.indexOf("btn1_") != -1){
    reg_user_answers.splice(0, 1, radio_that_called)
    r1++
    if ( r1 == 1 ){
      width++
      totalQuestions++
      c_totalQuestions.innerHTML = totalQuestions
      elem.style.width = width + "%";
    }
  }
  if ( radio_that_called.indexOf("btn2_") != -1 ){
    reg_user_answers.splice(1, 1, radio_that_called)
    r2++
    if ( r2 == 1 ){
      width++
      totalQuestions++
      c_totalQuestions.innerHTML = totalQuestions
      elem.style.width = width + "%";
    }
  }
  if ( radio_that_called.indexOf("btn3_") != -1 ){
    reg_user_answers.splice(2, 1, radio_that_called)
    r3++
    if ( r3 == 1 ){
      width++
      totalQuestions++
      c_totalQuestions.innerHTML = totalQuestions
      elem.style.width = width + "%";
    }
  }
  if ( radio_that_called.indexOf("btn4_") != -1 ){
    reg_user_answers.splice(3, 1, radio_that_called)
    r4++
    if ( r4 == 1 ){
      width++
      totalQuestions++
      c_totalQuestions.innerHTML = totalQuestions
      elem.style.width = width + "%";
    }  
  }
  if ( radio_that_called.indexOf("btn5_") != -1 ){
    reg_user_answers.splice(4, 1, radio_that_called)
    r5++
    if ( r5 == 1 ){
      width++
      totalQuestions++
      c_totalQuestions.innerHTML = totalQuestions
      elem.style.width = width + "%";
    } 
  }
  if ( radio_that_called.indexOf("btn6_") != -1 ){
    reg_user_answers.splice(5, 1, radio_that_called)
    r6++
    if ( r6 == 1 ){
      width++
      totalQuestions++
      c_totalQuestions.innerHTML = totalQuestions
      elem.style.width = width + "%";
    } 
  }
  if ( radio_that_called.indexOf("btn7_") != -1 ){
    reg_user_answers.splice(6, 1, radio_that_called)
    r7++
    if ( r7 == 1 ){
      width++
      totalQuestions++
      c_totalQuestions.innerHTML = totalQuestions
      elem.style.width = width + "%";
    } 
  }
  if ( radio_that_called.indexOf("btn8_") != -1 ){
    reg_user_answers.splice(7, 1, radio_that_called)
    r8++
    if ( r8 == 1 ){
      width++
      totalQuestions++
      c_totalQuestions.innerHTML = totalQuestions
      elem.style.width = width + "%";
    } 
  }
  if ( radio_that_called.indexOf("btn9_") != -1 ){
    reg_user_answers.splice(8, 1, radio_that_called)
    r9++
    if ( r9 == 1 ){
      width++
      totalQuestions++
      c_totalQuestions.innerHTML = totalQuestions
      elem.style.width = width + "%";
    }  
  }
  if ( radio_that_called.indexOf("btn10_") != -1 ){
    reg_user_answers.splice(9, 1, radio_that_called)
    r10++
    if ( r10 == 1 ){
      width++
      totalQuestions++
      c_totalQuestions.innerHTML = totalQuestions
      elem.style.width = width + "%";
    } 
  }
  if ( radio_that_called.indexOf("btn11_") != -1 ){
    reg_user_answers.splice(10, 1, radio_that_called)
    r11++
    if ( r11 == 1 ){
      width++
      totalQuestions++
      c_totalQuestions.innerHTML = totalQuestions
      elem.style.width = width + "%";
    } 
  }
  if ( radio_that_called.indexOf("btn12_") != -1 ){
    reg_user_answers.splice(11, 1, radio_that_called)
    r12++
    if ( r12 == 1 ){
      width++
      totalQuestions++
      c_totalQuestions.innerHTML = totalQuestions
      elem.style.width = width + "%";
    }  
  }
  if ( radio_that_called.indexOf("btn13_") != -1 ){
    reg_user_answers.splice(12, 1, radio_that_called)
    r13++
    if ( r13 == 1 ){
      width++
      totalQuestions++
      c_totalQuestions.innerHTML = totalQuestions
      elem.style.width = width + "%";
    }  
   } 
  if ( radio_that_called.indexOf("btn14_") != -1 ){
    reg_user_answers.splice(13, 1, radio_that_called)
    r14++
    if ( r14 == 1 ){
      width++
      totalQuestions++
      c_totalQuestions.innerHTML = totalQuestions
      elem.style.width = width + "%";
    }  
  }
  if ( radio_that_called.indexOf("btn15_") != -1 ){
    reg_user_answers.splice(14, 1, radio_that_called)
    r15++
    if ( r15 == 1 ){
      width++
      totalQuestions++
      c_totalQuestions.innerHTML = totalQuestions
      elem.style.width = width + "%";
    } 
  }
  if ( radio_that_called.indexOf("btn16_") != -1 ){
    reg_user_answers.splice(15, 1, radio_that_called)
    r16++
    if ( r16 == 1 ){
      width++
      totalQuestions++
      c_totalQuestions.innerHTML = totalQuestions
      elem.style.width = width + "%";
    } 
  }
  if ( radio_that_called.indexOf("btn17_") != -1 ){
    reg_user_answers.splice(16, 1, radio_that_called)
    r17++
    if ( r17 == 1 ){
      width++
      totalQuestions++
      c_totalQuestions.innerHTML = totalQuestions
      elem.style.width = width + "%";
    } 
  }
  if ( radio_that_called.indexOf("btn18_") != -1 ){
    reg_user_answers.splice(17, 1, radio_that_called)
    r18++
    if ( r18 == 1 ){
      width++
      totalQuestions++
      c_totalQuestions.innerHTML = totalQuestions
      elem.style.width = width + "%";
    }  
  }
  if ( radio_that_called.indexOf("btn19_") != -1 ){
    reg_user_answers.splice(18, 1, radio_that_called)
    r19++
    if ( r19 == 1 ){
      width++
      totalQuestions++
      c_totalQuestions.innerHTML = totalQuestions
      elem.style.width = width + "%";
    }  
  }
  if ( radio_that_called.indexOf("btn20_") != -1 ){
    reg_user_answers.splice(19, 1, radio_that_called)
    r20++
    if ( r20 == 1 ){
      width++
      totalQuestions++
      c_totalQuestions.innerHTML = totalQuestions
      elem.style.width = width + "%";
    }  
  }
} 

function nav_question_check(){
  radio_that_called = window.event.target.id
  if ( radio_that_called.indexOf("btn1_") != -1 ){
    nav_user_answers.splice(0, 1, radio_that_called)
    n1++
    if ( n1 == 1 ){
      width++
      totalQuestions++
      c_totalQuestions.innerHTML = totalQuestions
      elem.style.width = width + "%";
    }
  }
  if ( radio_that_called.indexOf("btn2_") != -1 ){
    nav_user_answers.splice(1, 1, radio_that_called) 
    n2++
    if ( n2 == 1 ){
      width++
      totalQuestions++
      c_totalQuestions.innerHTML = totalQuestions
      elem.style.width = width + "%";
    }
  }

  if ( radio_that_called.indexOf("btn3_") != -1 ){
    nav_user_answers.splice(2, 1, radio_that_called) 
    n3++
    if ( n3 == 1 ){
      width++
      totalQuestions++
      c_totalQuestions.innerHTML = totalQuestions
      elem.style.width = width + "%";
    }
  }

  if ( radio_that_called.indexOf("btn4_") != -1 ){
    nav_user_answers.splice(3, 1, radio_that_called) 
    n4++
    if ( n4 == 1 ){
      width++
      totalQuestions++
      c_totalQuestions.innerHTML = totalQuestions
      elem.style.width = width + "%";
    }
  }

  if ( radio_that_called.indexOf("btn5_") != -1 ){
    nav_user_answers.splice(4, 1, radio_that_called)
    n5++
    if ( n5 == 1 ){
      width++
      totalQuestions++
      c_totalQuestions.innerHTML = totalQuestions
      elem.style.width = width + "%";
    }
  }

  if ( radio_that_called.indexOf("btn6_") != -1 ){
    nav_user_answers.splice(5, 1, radio_that_called)
    n6++
    if ( n6 == 1 ){
      width++
      totalQuestions++
      c_totalQuestions.innerHTML = totalQuestions
      elem.style.width = width + "%";
    }
  }

  if ( radio_that_called.indexOf("btn7_") != -1 ){
    nav_user_answers.splice(6, 1, radio_that_called)
    n7++
    if ( n7 == 1 ){
      width++
      totalQuestions++
      c_totalQuestions.innerHTML = totalQuestions
      elem.style.width = width + "%";
    }
  }

  if ( radio_that_called.indexOf("btn8_") != -1 ){
    nav_user_answers.splice(7, 1, radio_that_called)
    n8++
    if ( n8 == 1 ){
      width++
      totalQuestions++
      c_totalQuestions.innerHTML = totalQuestions
      elem.style.width = width + "%";
    }
  }

  if ( radio_that_called.indexOf("btn9_") != -1 ){
    nav_user_answers.splice(8, 1, radio_that_called) 
    n9++
    if ( n9 == 1 ){
      width++
      totalQuestions++
      c_totalQuestions.innerHTML = totalQuestions
      elem.style.width = width + "%";
    }
  }

  if ( radio_that_called.indexOf("btn10_") != -1 ){
    nav_user_answers.splice(9, 1, radio_that_called)
    n10++
    if ( n10 == 1 ){
      width++
      totalQuestions++
      c_totalQuestions.innerHTML = totalQuestions
      elem.style.width = width + "%";
    }
  }

  if ( radio_that_called.indexOf("btn11_") != -1 ){
    nav_user_answers.splice(10, 1, radio_that_called)
    n11++
    if ( n11 == 1 ){
      width++
      totalQuestions++
      c_totalQuestions.innerHTML = totalQuestions
      elem.style.width = width + "%";
    } 
  }
  if ( radio_that_called.indexOf("btn12_") != -1 ){
    nav_user_answers.splice(11, 1, radio_that_called)
    n12++
    if ( n12 == 1 ){
      width++
      totalQuestions++
      c_totalQuestions.innerHTML = totalQuestions
      elem.style.width = width + "%";
    } 
  }
  if ( radio_that_called.indexOf("btn13_") != -1 ){
    nav_user_answers.splice(12, 1, radio_that_called)
    n13++
    if ( n13 == 1 ){
      width++
      totalQuestions++
      c_totalQuestions.innerHTML = totalQuestions
      elem.style.width = width + "%";
    } 
    }
  if ( radio_that_called.indexOf("btn14_") != -1 ){
    nav_user_answers.splice(13, 1, radio_that_called)
    n14++
    if ( n14 == 1 ){
      width++
      totalQuestions++
      c_totalQuestions.innerHTML = totalQuestions
      elem.style.width = width + "%";
    } 
  }
  if ( radio_that_called.indexOf("btn15_") != -1 ){
    nav_user_answers.splice(14, 1, radio_that_called)
    n15++
    if ( n15 == 1 ){
      width++
      totalQuestions++
      c_totalQuestions.innerHTML = totalQuestions
      elem.style.width = width + "%";
    } 
  }
  if ( radio_that_called.indexOf("btn16_") != -1 ){
    nav_user_answers.splice(15, 1, radio_that_called)
    n16++
    if ( n16 == 1 ){
      width++
      totalQuestions++
      c_totalQuestions.innerHTML = totalQuestions
      elem.style.width = width + "%";
    } 
  }
  if ( radio_that_called.indexOf("btn17_") != -1 ){
    nav_user_answers.splice(16, 1, radio_that_called)
    n17++
    if ( n17 == 1 ){
      width++
      totalQuestions++
      c_totalQuestions.innerHTML = totalQuestions
      elem.style.width = width + "%";
    } 
  }
  if ( radio_that_called.indexOf("btn18_") != -1 ){
    nav_user_answers.splice(17, 1, radio_that_called)
    n18++
    if ( n18 == 1 ){
      width++
      totalQuestions++
      c_totalQuestions.innerHTML = totalQuestions
      elem.style.width = width + "%";
    } 
  }
  if ( radio_that_called.indexOf("btn19_") != -1 ){
    nav_user_answers.splice(18, 1, radio_that_called)
    n19++
    if ( n19 == 1 ){
      width++
      totalQuestions++
      c_totalQuestions.innerHTML = totalQuestions
      elem.style.width = width + "%";
    } 
  }
  if ( radio_that_called.indexOf("btn20_") != -1 ){
    nav_user_answers.splice(19, 1, radio_that_called)
    n20++
    if ( n20 == 1 ){
      width++
      totalQuestions++
      c_totalQuestions.innerHTML = totalQuestions
      elem.style.width = width + "%";
    } 
  }
}

function met_question_check(){
  radio_that_called = window.event.target.id
  if ( radio_that_called.indexOf("btn1_") != -1 ){
    met_user_answers.splice(0, 1, radio_that_called)
    m1++
    if ( m1 == 1 ){
      width++
      totalQuestions++
      c_totalQuestions.innerHTML = totalQuestions
      elem.style.width = width + "%";
    }
  }

  if ( radio_that_called.indexOf("btn2_") != -1 ){
    met_user_answers.splice(1, 1, radio_that_called)
    m2++
    if ( m2 == 1 ){
      width++
      totalQuestions++
      c_totalQuestions.innerHTML = totalQuestions
      elem.style.width = width + "%";
    }
  } 

  if ( radio_that_called.indexOf("btn3_") != -1 ){
    met_user_answers.splice(2, 1, radio_that_called)
    m3++
    if ( m3 == 1 ){
      width++
      totalQuestions++
      c_totalQuestions.innerHTML = totalQuestions
      elem.style.width = width + "%";
    }
  } 

  if ( radio_that_called.indexOf("btn4_") != -1 ){
    met_user_answers.splice(3, 1, radio_that_called)
    m4++
    if ( m4 == 1 ){
      width++
      totalQuestions++
      c_totalQuestions.innerHTML = totalQuestions
      elem.style.width = width + "%";
    }
  } 

  if ( radio_that_called.indexOf("btn5_") != -1 ){
    met_user_answers.splice(4, 1, radio_that_called)
    m5++
    if ( m5 == 1 ){
      width++
      totalQuestions++
      c_totalQuestions.innerHTML = totalQuestions
      elem.style.width = width + "%";
    }
  }

  if ( radio_that_called.indexOf("btn6_") != -1 ){
    met_user_answers.splice(5, 1, radio_that_called)
    m6++
    if ( m6 == 1 ){
      width++
      totalQuestions++
      c_totalQuestions.innerHTML = totalQuestions
      elem.style.width = width + "%";
    }
  }

  if ( radio_that_called.indexOf("btn7_") != -1 ){
    met_user_answers.splice(6, 1, radio_that_called)
    m7++
    if ( m7 == 1 ){
      width++
      totalQuestions++
      c_totalQuestions.innerHTML = totalQuestions
      elem.style.width = width + "%";
    }
  }

  if ( radio_that_called.indexOf("btn8_") != -1 ){
    met_user_answers.splice(7, 1, radio_that_called)
    m8++
    if ( m8 == 1 ){
      width++
      totalQuestions++
      c_totalQuestions.innerHTML = totalQuestions
      elem.style.width = width + "%";
    }
  }

  if ( radio_that_called.indexOf("btn9_") != -1 ){
    met_user_answers.splice(8, 1, radio_that_called)
    m9++
    if ( m9 == 1 ){
      width++
      totalQuestions++
      c_totalQuestions.innerHTML = totalQuestions
      elem.style.width = width + "%";
    }
  } 

  if ( radio_that_called.indexOf("btn10_") != -1 ){
    met_user_answers.splice(9, 1, radio_that_called)
    m10++
    if ( m10 == 1 ){
      width++
      totalQuestions++
      c_totalQuestions.innerHTML = totalQuestions
      elem.style.width = width + "%";
    }
  }

  if ( radio_that_called.indexOf("btn11_") != -1 ){
    met_user_answers.splice(10, 1, radio_that_called)
    m11++
    if ( m11 == 1 ){
      width++
      totalQuestions++
      c_totalQuestions.innerHTML = totalQuestions
      elem.style.width = width + "%";
    }
  }

  if ( radio_that_called.indexOf("btn12_") != -1 ){
    met_user_answers.splice(11, 1, radio_that_called)
    m12++
    if ( m12 == 1 ){
      width++
      totalQuestions++
      c_totalQuestions.innerHTML = totalQuestions
      elem.style.width = width + "%";
    }
  } 

  if ( radio_that_called.indexOf("btn13_") != -1 ){
    met_user_answers.splice(12, 1, radio_that_called)
    m13++
    if ( m13 == 1 ){
      width++
      totalQuestions++
      c_totalQuestions.innerHTML = totalQuestions
      elem.style.width = width + "%";
    }
  } 
    
  if ( radio_that_called.indexOf("btn14_") != -1 ){
    met_user_answers.splice(13, 1, radio_that_called)
    m14++
    if ( m14 == 1 ){
      width++
      totalQuestions++
      c_totalQuestions.innerHTML = totalQuestions
      elem.style.width = width + "%";
    }
  } 

  if ( radio_that_called.indexOf("btn15_") != -1 ){
    met_user_answers.splice(14, 1, radio_that_called)
    m15++
    if ( m15 == 1 ){
      width++
      totalQuestions++
      c_totalQuestions.innerHTML = totalQuestions
      elem.style.width = width + "%";
    }
  }

  if ( radio_that_called.indexOf("btn16_") != -1 ){
    met_user_answers.splice(15, 1, radio_that_called)
    m16++
    if ( m16 == 1 ){
      width++
      totalQuestions++
      c_totalQuestions.innerHTML = totalQuestions
      elem.style.width = width + "%";
    }
  }

  if ( radio_that_called.indexOf("btn17_") != -1 ){
    met_user_answers.splice(16, 1, radio_that_called)
    m17++
    if ( m17 == 1 ){
      width++
      totalQuestions++
      c_totalQuestions.innerHTML = totalQuestions
      elem.style.width = width + "%";
    }
  }

  if ( radio_that_called.indexOf("btn18_") != -1 ){
    met_user_answers.splice(17, 1, radio_that_called)
    m18++
    if ( m18 == 1 ){
      width++
      totalQuestions++
      c_totalQuestions.innerHTML = totalQuestions
      elem.style.width = width + "%";
    }
  } 

  if ( radio_that_called.indexOf("btn19_") != -1 ){
    met_user_answers.splice(18, 1, radio_that_called)
    m19++
    if ( m19 == 1 ){
      width++
      totalQuestions++
      c_totalQuestions.innerHTML = totalQuestions
      elem.style.width = width + "%";
    }
  } 

  if ( radio_that_called.indexOf("btn20_") != -1 ){
    met_user_answers.splice(19, 1, radio_that_called)
    m20++
    if ( m20 == 1 ){
      width++
      totalQuestions++
      c_totalQuestions.innerHTML = totalQuestions
      elem.style.width = width + "%";
    }
  } 
} 

function ct_question_check(){
  radio_that_called = window.event.target.id
  if ( radio_that_called.indexOf("btn1_") != -1 ){
    ct_user_answers.splice(0, 1, radio_that_called)
    c1++
    if ( c1 == 1 ){
      width++
      totalQuestions++
      c_totalQuestions.innerHTML = totalQuestions
      elem.style.width = width + "%";
    }
  }
  
  if ( radio_that_called.indexOf("btn2_") != -1 ){
    ct_user_answers.splice(1, 1, radio_that_called)
    c2++
    if ( c2 == 1 ){
      width++
      totalQuestions++
      c_totalQuestions.innerHTML = totalQuestions
      elem.style.width = width + "%";
    }
  } 

  if ( radio_that_called.indexOf("btn3_") != -1 ){
    ct_user_answers.splice(2, 1, radio_that_called)
    c3++
    if ( c3 == 1 ){
      width++
      totalQuestions++
      c_totalQuestions.innerHTML = totalQuestions
      elem.style.width = width + "%";
    }
  } 

  if ( radio_that_called.indexOf("btn4_") != -1 ){
    ct_user_answers.splice(3, 1, radio_that_called)
    c4++
    if ( c4 == 1 ){
      width++
      totalQuestions++
      c_totalQuestions.innerHTML = totalQuestions
      elem.style.width = width + "%";
    }
  } 

  if ( radio_that_called.indexOf("btn5_") != -1 ){
    ct_user_answers.splice(4, 1, radio_that_called)
    c5++
    if ( c5 == 1 ){
      width++
      totalQuestions++
      c_totalQuestions.innerHTML = totalQuestions
      elem.style.width = width + "%";
    }
  }

  if ( radio_that_called.indexOf("btn6_") != -1 ){
    ct_user_answers.splice(5, 1, radio_that_called)
    c6++
    if ( c6 == 1 ){
      width++
      totalQuestions++
      c_totalQuestions.innerHTML = totalQuestions
      elem.style.width = width + "%";
    }
  }

  if ( radio_that_called.indexOf("btn7_") != -1 ){
    ct_user_answers.splice(6, 1, radio_that_called)
    c7++
    if ( c7 == 1 ){
      width++
      totalQuestions++
      c_totalQuestions.innerHTML = totalQuestions
      elem.style.width = width + "%";
    }
  }

  if ( radio_that_called.indexOf("btn8_") != -1 ){
    ct_user_answers.splice(7, 1, radio_that_called)
    c8++
    if ( c8 == 1 ){
      width++
      totalQuestions++
      c_totalQuestions.innerHTML = totalQuestions
      elem.style.width = width + "%";
    }
  }

  if ( radio_that_called.indexOf("btn9_") != -1 ){
    ct_user_answers.splice(8, 1, radio_that_called)
    c9++
    if ( c9 == 1 ){
      width++
      totalQuestions++
      c_totalQuestions.innerHTML = totalQuestions
      elem.style.width = width + "%";
    }
  } 

  if ( radio_that_called.indexOf("btn10_") != -1 ){
    ct_user_answers.splice(9, 1, radio_that_called)
    c10++
    if ( c10 == 1 ){
      width++
      totalQuestions++
      c_totalQuestions.innerHTML = totalQuestions
      elem.style.width = width + "%";
    }
  }

  if ( radio_that_called.indexOf("btn11_") != -1 ){
    ct_user_answers.splice(10, 1, radio_that_called)
    c11++
    if ( c11 == 1 ){
      width++
      totalQuestions++
      c_totalQuestions.innerHTML = totalQuestions
      elem.style.width = width + "%";
    }
  }

  if ( radio_that_called.indexOf("btn12_") != -1 ){
    ct_user_answers.splice(11, 1, radio_that_called)
    c12++
    if ( c12 == 1 ){
      width++
      totalQuestions++
      c_totalQuestions.innerHTML = totalQuestions
      elem.style.width = width + "%";
    }
  } 

  if ( radio_that_called.indexOf("btn13_") != -1 ){
    ct_user_answers.splice(12, 1, radio_that_called)
    c13++
    if ( c13 == 1 ){
      width++
      totalQuestions++
      c_totalQuestions.innerHTML = totalQuestions
      elem.style.width = width + "%";
    }
  } 
    
  if ( radio_that_called.indexOf("btn14_") != -1 ){
    ct_user_answers.splice(13, 1, radio_that_called)
    c14++
    if ( c14 == 1 ){
      width++
      totalQuestions++
      c_totalQuestions.innerHTML = totalQuestions
      elem.style.width = width + "%";
    }
  } 

  if ( radio_that_called.indexOf("btn15_") != -1 ){
    ct_user_answers.splice(14, 1, radio_that_called)
    c15++
    if ( c15 == 1 ){
      width++
      totalQuestions++
      c_totalQuestions.innerHTML = totalQuestions
      elem.style.width = width + "%";
    }
  }

  if ( radio_that_called.indexOf("btn16_") != -1 ){
    ct_user_answers.splice(15, 1, radio_that_called)
    c16++
    if ( c16 == 1 ){
      width++
      totalQuestions++
      c_totalQuestions.innerHTML = totalQuestions
      elem.style.width = width + "%";
    }
  }

  if ( radio_that_called.indexOf("btn17_") != -1 ){
    ct_user_answers.splice(16, 1, radio_that_called)
    c17++
    if ( c17 == 1 ){
      width++
      totalQuestions++
      c_totalQuestions.innerHTML = totalQuestions
      elem.style.width = width + "%";
    }
  }

  if ( radio_that_called.indexOf("btn18_") != -1 ){
    ct_user_answers.splice(17, 1, radio_that_called)
    c18++
    if ( c18 == 1 ){
      width++
      totalQuestions++
      c_totalQuestions.innerHTML = totalQuestions
      elem.style.width = width + "%";
    }
  } 

  if ( radio_that_called.indexOf("btn19_") != -1 ){
    ct_user_answers.splice(18, 1, radio_that_called)
    c19++
    if ( c19 == 1 ){
      width++
      totalQuestions++
      c_totalQuestions.innerHTML = totalQuestions
      elem.style.width = width + "%";
    }
  } 

  if ( radio_that_called.indexOf("btn20_") != -1 ){
    ct_user_answers.splice(19, 1, radio_that_called)
    c20++
    if ( c20 == 1 ){
      width++
      totalQuestions++
      c_totalQuestions.innerHTML = totalQuestions
      elem.style.width = width + "%";
    }
  } 
} 

function tv_question_check(){
  radio_that_called = window.event.target.id
  if ( radio_that_called.indexOf("btn1_") != -1 ){
    tv_user_answers.splice(0, 1, radio_that_called)
    t1++
    if ( t1 == 1 ){
      width++
      totalQuestions++
      c_totalQuestions.innerHTML = totalQuestions
      elem.style.width = width + "%";
    }
  }
  
  if ( radio_that_called.indexOf("btn2_") != -1 ){
    tv_user_answers.splice(1, 1, radio_that_called)
    t2++
    if ( t2 == 1 ){
      width++
      totalQuestions++
      c_totalQuestions.innerHTML = totalQuestions
      elem.style.width = width + "%";
    }
  } 

  if ( radio_that_called.indexOf("btn3_") != -1 ){
    tv_user_answers.splice(2, 1, radio_that_called)
    t3++
    if ( t3 == 1 ){
      width++
      totalQuestions++
      c_totalQuestions.innerHTML = totalQuestions
      elem.style.width = width + "%";
    }
  } 

  if ( radio_that_called.indexOf("btn4_") != -1 ){
    tv_user_answers.splice(3, 1, radio_that_called)
    t4++
    if ( t4 == 1 ){
      width++
      totalQuestions++
      c_totalQuestions.innerHTML = totalQuestions
      elem.style.width = width + "%";
    }
  } 

  if ( radio_that_called.indexOf("btn5_") != -1 ){
    tv_user_answers.splice(4, 1, radio_that_called)
    t5++
    if ( t5 == 1 ){
      width++
      totalQuestions++
      c_totalQuestions.innerHTML = totalQuestions
      elem.style.width = width + "%";
    }
  }

  if ( radio_that_called.indexOf("btn6_") != -1 ){
    tv_user_answers.splice(5, 1, radio_that_called)
    t6++
    if ( t6 == 1 ){
      width++
      totalQuestions++
      c_totalQuestions.innerHTML = totalQuestions
      elem.style.width = width + "%";
    }
  }

  if ( radio_that_called.indexOf("btn7_") != -1 ){
    tv_user_answers.splice(6, 1, radio_that_called)
    t7++
    if ( t7 == 1 ){
      width++
      totalQuestions++
      c_totalQuestions.innerHTML = totalQuestions
      elem.style.width = width + "%";
    }
  }

  if ( radio_that_called.indexOf("btn8_") != -1 ){
    tv_user_answers.splice(7, 1, radio_that_called)
    t8++
    if ( t8 == 1 ){
      width++
      totalQuestions++
      c_totalQuestions.innerHTML = totalQuestions
      elem.style.width = width + "%";
    }
  }

  if ( radio_that_called.indexOf("btn9_") != -1 ){
    tv_user_answers.splice(8, 1, radio_that_called)
    t9++
    if ( t9 == 1 ){
      width++
      totalQuestions++
      c_totalQuestions.innerHTML = totalQuestions
      elem.style.width = width + "%";
    }
  } 

  if ( radio_that_called.indexOf("btn10_") != -1 ){
    tv_user_answers.splice(9, 1, radio_that_called)
    t10++
    if ( t10 == 1 ){
      width++
      totalQuestions++
      c_totalQuestions.innerHTML = totalQuestions
      elem.style.width = width + "%";
    }
  }

  if ( radio_that_called.indexOf("btn11_") != -1 ){
    tv_user_answers.splice(10, 1, radio_that_called)
    t11++
    if ( t11 == 1 ){
      width++
      totalQuestions++
      c_totalQuestions.innerHTML = totalQuestions
      elem.style.width = width + "%";
    }
  }

  if ( radio_that_called.indexOf("btn12_") != -1 ){
    tv_user_answers.splice(11, 1, radio_that_called)
    t12++
    if ( t12 == 1 ){
      width++
      totalQuestions++
      c_totalQuestions.innerHTML = totalQuestions
      elem.style.width = width + "%";
    }
  } 

  if ( radio_that_called.indexOf("btn13_") != -1 ){
    tv_user_answers.splice(12, 1, radio_that_called)
    t13++
    if ( t13 == 1 ){
      width++
      totalQuestions++
      c_totalQuestions.innerHTML = totalQuestions
      elem.style.width = width + "%";
    }
  } 
    
  if ( radio_that_called.indexOf("btn14_") != -1 ){
    tv_user_answers.splice(13, 1, radio_that_called)
    t14++
    if ( t14 == 1 ){
      width++
      totalQuestions++
      c_totalQuestions.innerHTML = totalQuestions
      elem.style.width = width + "%";
    }
  } 

  if ( radio_that_called.indexOf("btn15_") != -1 ){
    tv_user_answers.splice(14, 1, radio_that_called)
    t15++
    if ( t15 == 1 ){
      width++
      totalQuestions++
      c_totalQuestions.innerHTML = totalQuestions
      elem.style.width = width + "%";
    }
  }

  if ( radio_that_called.indexOf("btn16_") != -1 ){
    tv_user_answers.splice(15, 1, radio_that_called)
    t16++
    if ( t16 == 1 ){
      width++
      totalQuestions++
      c_totalQuestions.innerHTML = totalQuestions
      elem.style.width = width + "%";
    }
  }

  if ( radio_that_called.indexOf("btn17_") != -1 ){
    tv_user_answers.splice(16, 1, radio_that_called)
    t17++
    if ( t17 == 1 ){
      width++
      totalQuestions++
      c_totalQuestions.innerHTML = totalQuestions
      elem.style.width = width + "%";
    }
  }

  if ( radio_that_called.indexOf("btn18_") != -1 ){
    tv_user_answers.splice(17, 1, radio_that_called)
    t18++
    if ( t18 == 1 ){
      width++
      totalQuestions++
      c_totalQuestions.innerHTML = totalQuestions
      elem.style.width = width + "%";
    }
  } 

  if ( radio_that_called.indexOf("btn19_") != -1 ){
    tv_user_answers.splice(18, 1, radio_that_called)
    t19++
    if ( t19 == 1 ){
      width++
      totalQuestions++
      c_totalQuestions.innerHTML = totalQuestions
      elem.style.width = width + "%";
    }
  } 

  if ( radio_that_called.indexOf("btn20_") != -1 ){
    tv_user_answers.splice(19, 1, radio_that_called)
    t20++
    if ( t20 == 1 ){
      width++
      totalQuestions++
      c_totalQuestions.innerHTML = totalQuestions
      elem.style.width = width + "%";
    }
  } 
} 



function finish(){
  /*var firstMessage = confirm('Tem certeza de que deseja finalizar o simulado?')
  if ( firstMessage == false ) {
    return;
  }
  var secondMessage = confirm('Essa ação não poderá ser desfeita, continuar mesmo assim?')
  if ( secondMessage == false ) {
    return;
  }*/
  clearInterval(x)

  var removebutton = document.getElementById('btn-finish')
  removebutton.parentNode.removeChild(removebutton)
  
  elem.parentNode.removeChild(elem)
  var final_bar = document.createElement('div')
  final_bar.setAttribute('id' , 'finalBar')
  final_bar.style.width = width + "%";
  var c_myProgress = document.getElementById('myProgress')
  c_myProgress.appendChild(final_bar)

  var final_progress_container = document.createElement('div')
  final_progress_container.setAttribute('id' , 'final-progress-container')
  final_progress_container.style.width = '1436px'
  var final_bar = document.getElementById('finalBar')
  final_bar.appendChild(final_progress_container)

  var create_final_questions = document.createElement('a')
  create_final_questions.setAttribute('id' , 'finalQuestions')
  final_progress_container.appendChild(create_final_questions)
  create_final_questions_text = document.createTextNode(`${totalQuestions}/100`)
  create_final_questions.appendChild(create_final_questions_text)

  let reg_final_correct = 0
  let reg_final_wrong   = 20
  let reg_final_table = [ '0' , '0' , '0' , '0' , '0' , '0' , '0' , '0' , '0' , '0' , '0' , '0' , '0' , '0' , '0' , '0' , '0' , '0' , '0' , '0' ]
  for ( x=0 ; x<20 ; x++){
    if ( reg_answers.indexOf(reg_user_answers[x]) != -1 ){
      reg_final_correct++
      reg_final_wrong--
      reg_final_table[x] = 1
    }
  }

  let nav_final_correct = 0
  let nav_final_wrong   = 20
  let nav_final_table = [ '0' , '0' , '0' , '0' , '0' , '0' , '0' , '0' , '0' , '0' , '0' , '0' , '0' , '0' , '0' , '0' , '0' , '0' , '0' , '0' ]
  for ( x=0 ; x<20 ; x++){
    if ( nav_answers.indexOf(nav_user_answers[x]) != -1 ){
      nav_final_correct++
      nav_final_wrong--
      nav_final_table[x] = 1
    }
  }

  let met_final_correct = 0
  let met_final_wrong   = 20
  let met_final_table = [ '0' , '0' , '0' , '0' , '0' , '0' , '0' , '0' , '0' , '0' , '0' , '0' , '0' , '0' , '0' , '0' , '0' , '0' , '0' , '0' ]
  for ( x=0 ; x<20 ; x++){
    if ( met_answers.indexOf(met_user_answers[x]) != -1 ){
      met_final_correct++
      met_final_wrong--
      met_final_table[x] = 1
    }
  }

  let ct_final_correct = 0
  let ct_final_wrong   = 20
  let ct_final_table = [ '0' , '0' , '0' , '0' , '0' , '0' , '0' , '0' , '0' , '0' , '0' , '0' , '0' , '0' , '0' , '0' , '0' , '0' , '0' , '0' ]
  for ( x=0 ; x<20 ; x++){
    if ( ct_answers.indexOf(ct_user_answers[x]) != -1 ){
      ct_final_correct++
      ct_final_wrong--
      ct_final_table[x] = 1
    }
  }

  let tv_final_correct = 0
  let tv_final_wrong   = 20
  let tv_final_table = [ '0' , '0' , '0' , '0' , '0' , '0' , '0' , '0' , '0' , '0' , '0' , '0' , '0' , '0' , '0' , '0' , '0' , '0' , '0' , '0' ]
  for ( x=0 ; x<20 ; x++){
    if ( tv_answers.indexOf(tv_user_answers[x]) != -1 ){
      tv_final_correct++
      tv_final_wrong--
      tv_final_table[x] = 1
    }
  }


  //CREATES TABLE
  var create_table = document.createElement('table')
  create_table.setAttribute('id', 'tabela')
  var c_container3 = document.getElementById('container3')
  c_container3.appendChild(create_table)



  //CREATES FIRST ROW AND FIRST HEADER
  var row1 = document.createElement('tr')
  create_table.appendChild(row1)

  var first_header = document.createElement('th')
  first_header.setAttribute('id' , 'results')
  first_header.setAttribute('colspan' , 10)
  var first_header_text = document.createTextNode('Resultados')
  first_header.appendChild(first_header_text)
  row1.appendChild(first_header)



  //CREATES SECOND ROW AND REG,NAV,MET,CT AND TV HEADERS
  var row2 = document.createElement('tr')
  create_table.appendChild(row2)

  var reg_header = document.createElement('th')
  reg_header.setAttribute('id' , 'reg-header')
  reg_header.setAttribute('colSpan' , 2)
  var reg_header_text = document.createTextNode('Regulamentos')
  reg_header.appendChild(reg_header_text)
  row2.appendChild(reg_header)

  var nav_header = document.createElement('th')
  nav_header.setAttribute('id' , 'nav-header')
  nav_header.setAttribute('colSpan' , 2)
  var nav_header_text = document.createTextNode('Navegação')
  nav_header.appendChild(nav_header_text)
  row2.appendChild(nav_header)

  var met_header = document.createElement('th')
  met_header.setAttribute('id' , 'met-header')
  met_header.setAttribute('colSpan' , 2)
  var met_header_text = document.createTextNode('Meteorologia')
  met_header.appendChild(met_header_text)
  row2.appendChild(met_header)

  var ct_header = document.createElement('th')
  ct_header.setAttribute('id' , 'ct-header')
  ct_header.setAttribute('colSpan' , 2)
  var ct_header_text = document.createTextNode('Conhecimentos')
  ct_header.appendChild(ct_header_text)
  row2.appendChild(ct_header)

  var tv_header = document.createElement('th')
  tv_header.setAttribute('id' , 'tv-header')
  tv_header.setAttribute('colSpan' , 2)
  var tv_header_text = document.createTextNode('Teoria')
  tv_header.appendChild(tv_header_text)
  row2.appendChild(tv_header)



  //CREATES THIRD ROW AND NUMBER OF CORRECT AND WRONGS ANSWERS FOR EACH SUBJECT 
  var row3 = document.createElement('tr')
  create_table.appendChild(row3)

  var reg_right = document.createElement('td')
  reg_right.setAttribute('id' , 'reg-right')
  reg_right.setAttribute('class' , 'green')
  var reg_right_text = document.createTextNode(reg_final_correct)
  reg_right.appendChild(reg_right_text)
  row3.appendChild(reg_right)
  var reg_wrong = document.createElement('td')
  reg_wrong.setAttribute('id', 'reg-wrong')
  reg_wrong.setAttribute('class', 'red')
  var reg_wrong_text = document.createTextNode(reg_final_wrong)
  reg_wrong.appendChild(reg_wrong_text)
  row3.appendChild(reg_wrong)

  var nav_right = document.createElement('td')
  nav_right.setAttribute('id' , 'nav-right')
  nav_right.setAttribute('class' , 'green')
  var nav_right_text = document.createTextNode(nav_final_correct)
  nav_right.appendChild(nav_right_text)
  row3.appendChild(nav_right)
  var nav_wrong = document.createElement('td')
  nav_wrong.setAttribute('id', 'nav-wrong')
  nav_wrong.setAttribute('class', 'red')
  var nav_wrong_text = document.createTextNode(nav_final_wrong)
  nav_wrong.appendChild(nav_wrong_text)
  row3.appendChild(nav_wrong)

  var met_right = document.createElement('td')
  met_right.setAttribute('id' , 'met-right')
  met_right.setAttribute('class' , 'green')
  var met_right_text = document.createTextNode(met_final_correct)
  met_right.appendChild(met_right_text)
  row3.appendChild(met_right)
  var met_wrong = document.createElement('td')
  met_wrong.setAttribute('id', 'met-wrong')
  met_wrong.setAttribute('class', 'red')
  var met_wrong_text = document.createTextNode(met_final_wrong)
  met_wrong.appendChild(met_wrong_text)
  row3.appendChild(met_wrong)

  var ct_right = document.createElement('td')
  ct_right.setAttribute('id' , 'ct-right')
  ct_right.setAttribute('class' , 'green')
  var ct_right_text = document.createTextNode(ct_final_correct)
  ct_right.appendChild(ct_right_text)
  row3.appendChild(ct_right)
  var ct_wrong = document.createElement('td')
  ct_wrong.setAttribute('id', 'ct-wrong')
  ct_wrong.setAttribute('class', 'red')
  var ct_wrong_text = document.createTextNode(ct_final_wrong)
  ct_wrong.appendChild(ct_wrong_text)
  row3.appendChild(ct_wrong)

  var tv_right = document.createElement('td')
  tv_right.setAttribute('id' , 'tv-right')
  tv_right.setAttribute('class' , 'green')
  var tv_right_text = document.createTextNode(tv_final_correct)
  tv_right.appendChild(tv_right_text)
  row3.appendChild(tv_right)
  var tv_wrong = document.createElement('td')
  tv_wrong.setAttribute('id', 'tv-wrong')
  tv_wrong.setAttribute('class', 'red')
  var tv_wrong_text = document.createTextNode(tv_final_wrong)
  tv_wrong.appendChild(tv_wrong_text)
  row3.appendChild(tv_wrong)
}