/*
ESSE E O INICIO PARA A INTEGRAÇÃO DO SISTEMA COM AS DEMAIS INTERAÇÕES
mais não deixa que o refresh seja permitido na tela
*/
$(document).ready(function(e){
    e.preventDefalt()
})
$("li").click(function(){
/*
todos os itens esta dento dessa função, escolhi assim para que não tenha 
limpa a tela para que possa se utilizada novamento
esse codigo deixa que o menu tenha suas funções assim tendo o total controle sem o refresh de tela,
na usabilidade do sistema, trazendo uma funcionalidade mais clara e especifica!
*/
    $("#demonstrativo").empty();
/*
identifica o nome do item selecionado e para que a tela seja limpa
mais inicia com outros valores
*/
    let iten = $(this).attr("id")
/*
temos algumas clasulas que identifica qual e o item que foi clicado 
e ativa suas funções
*/
    if(iten == "home"){
        $("#lista").css("display","none");
    }
/*controle de menu contato*/
    if(iten == "contato") {
        $("#lista").css("display","none");
        if($("#demonstrativo form").length == 0){
            $("#demonstrativo").append(
                montar => {
                const css_formulario = "<div id=formulario>";
                const imagem = "<img src =imagens/contatos.jpg>"
                const form = "<form id=contatoform>";
                const campo_nome = "<label>Nome: <input text=Text></label>";
                const campo_messagem = "<label>Menssagem: <textarea name=mensagem id=menssagem cols=40 rows=9></textarea></label>";
                const btenviar = "<input type=button id=btenviar value=Enviar>"
                const btcancelar = "<input type=button id=btcancela value=Cancela>"
                return css_formulario+imagem+form+campo_nome+campo_messagem+btenviar+btcancelar;
            })
        }
        //comando do botao enviar
         $("#btenviar").click(function(){
            alert("ok");
        })
        //comando para resetar o formulario do e deixar tudo vazio
        $("#btcancela").click(function () { 
            $("#contatoform")[0].reset();
        });
    }
/*menu do item saibamais ativa os itens para o janela*/
    if(iten == "saibamais"){
        $("#demonstrativo").append(montar_texto =>{
            return "<p>teste do codigo Jquery <br>Scanners, câmeras digitais, e outros dispositivos de aquisição de imagens estão constantemente presentes no panorama da computação. Em que pese essa ubiquidade, Java ainda não possui uma especificação ou uma API padrão para interagir com estes componentes.<br> Quando se faz necessário integrar uma aplicação Java a tais dispositivos, o programador deve recorrer a bindings, que usam métodos nativos fora da JVM.<br>Atualmente existem dois protocolos, conhecidos como TWAIN e SANE, que especificam a comunicação entre um software e um dispositivo de imagens.<br>TWAIN, além de um protocolo, também representa uma organização formada pelas principais marcas da indústria da imagem. SANE (Scanner Access Now Easy), comumente usade em Linux, é uma API que padroniza o acesso a dispositivos de imagens, e difere de TWAIN a medida em que separa claramente o frontend (programa do usuário) e o backend (driver), o que torna mais fácil e transparente o acesso aos dispositivos dentro de uma rede (como uma LAN cheia de máquinas, mas com scanners conectados a apenas um ou duas máquinas, por exemplo</p>"
        });
        $("#lista").css("display","none");
    }
/*menu catalogo ativação com o pesquisa em banco de 
dados, e sera maontada com o auxilio desse item*/
    $("#catalogo").click(function(){
        $("#lista").show();
    });
/*menu nossa missão onde trara a informações dos objetivo do studio beleza */
    if(iten == "nossamissao"){
        alert("esse sera incrivel")
    }
})








