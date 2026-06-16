let h1 = 0
let h2 = 0
let h3 = 0
let h4 = 0
let h5 = 0
let h6 = 0
let h7 = 0
let h8 = 0
let h9 = 0
let h10 = 0
function iniciar(){
    h1 = Number(prompt("Roque já tem a Jota Qwert confirmada e vai atrás da possível segunda atração do Rock in Reels. \n\nVisitando suas amigas da Tias Fofinhas (uma banda cover de Tear for Fears), fez o convite e ouviu suas exigências: 50 toalhas de crochê no camarim. Roque então se viu em um dilema: nem camarim o evento tem, elas vão tocar pela internet. \n\nQuanto mais 50 toalhas de crochê. Roque deve falar a verdade ou mentir que tem camarim e as toalhas. \n\n- Verdade: 02 \n\n- Mentir: 03"))
    if(h1 == 2){
      h2 = Number(prompt("Roque contou para  as Tias Fofinhas que o evento ainda está engatinhando e não temos camarins ou mesmo verba para comprar toalhas de crochê, infelizmente.\nElas ficaram tristes pela dura realidade dos músicos, mas apreciaram a sinceridade. \nPrometeram levar suas próprias toalhas e ainda passaram o contato do grupo de rap dos netos de uma amiga delas. \nElas já viram Yasmina e os Manos se apresentando no aniversário da avó deles e acharam muito talentosos e carismáticos, além de muito conectados. \nPode ser uma boa adição para este evento.\n\nRoque foi falar com eles, Yasmina pediu que o grupo fosse marcado em todas as fotos postadas de divulgação do evento, assim eles poderiam atrair seu público para o evento.\n\nRoque deve aceitar ou rejeitar essa exigência?\n\n- Aceitar: 04\n\n- Rejeitar: 05"))  
        if(h2 == 4){
            h4 = Number(prompt("Roque aceita e marca Yasmina e os Manos em todas as postagens e o efeito é assustadoramente bom! O evento viraliza e todo mundo fica sabendo. Muita audiência, mas muita responsabilidade!\n\n\Com todo essa promessa de sucesso, ofertas de parceria e patrocínios apareceram. Bandas também.\n\nUma desconhecida banda chamada Horrível Trio se ofereceu para tocar. As músicas deles são muito relaxantes e Roque ficou receoso que colocasse o público para dormir.\n\nRoque deve aceitar Horrível Trio?\n\n- Sim: 08\n\n- Não: 09"))  
            if(h4 == 8){
                h8 = Number(prompt("Roque decide arriscar aceitando a desconhecida banda Horrível Trio e o resultado foi maravilhoso. A música é realmente relaxante mas não tediosa e os músicos são muito virtuosos!\n\nCoincidentemente, Jeferson Bezerra, CEO da big tech amazonia, é muito fã do Horrível Trio e adorou o evento. Gostou tanto que fez uma proposta para reprisar o evento na rede social que ele está lançando. A proposta é financeiramente muito boa, mas Bezerra tem medo de ter problemas de direitos autorais com as bandas cover tocando músicas de outras bandas e pede para elas não aparecerem.\n\nRoque deve aceitar a proposta, cortando Jota Qwert e Tias Fofinhas?\n\n- Sim: 10\n\n- Não: 11")) 
                    if(h8 == 10){
                        prompt("O corte de duas das bandas originais do festival cria uma onda de revoltas entre os fãs e o festival sobre um enorme cancelamento. Depois dessa repercussão fortemente negativa ninguém mais quer ter seu nome atrelado ao evento e ele nunca mais volta a acontecer.\n\nFIM.")
                    }
                    else{
                        prompt("Roque nega a proposta da amazonia porque não quer virar as costas para quem esteve junto com ele desde o começo! Jeferson Bezerra então resolve usar sua influência e ‘consegue’ a liberação para exibição das músicas das bandas cover.\n\nA veiculação do festival na nova rede social acontece tanto completa como em partes e shorts, tudo vira um grande sucesso e os contatos para uma nova edição já estão fervendo!\n\n\Fim.")
                    }
            
            }else{
                prompt("Roque resolve não arriscar e não inclui a Horrível Trio no evento. O evento tem alguma relavância por conta do alcance e engajamento das redes de Yasmina mas nunca decola completamente. Dada a repercussão obtida com o público nichado o evento vai virar um festival de Rap na próxima edição, mas mantendo o mesmo nome.\n\nFIM.")
            }
            
        }
        else{
             prompt("Roque não entende a intenção de Yasmina, fica receoso e acaba rejeitando a proposta. Por conta desta decisão o Rock in Reels não viraliza. Acontece, duas boas bandas tocam, mas o evento nunca explode para o sucesso que poderia ter sido.\n\nFim.")
        }
    }
    else{
         h3 = Number(prompt("Roque mente para as Tias Fofinhas que tem as toalhas. Elas perguntam de que cor são, ele diz que são brancas (afinal todas as toalhas de crochê são brancas, não é?). Elas complementam que suas toalhas tem que ser pretas. Eles gagueja, diz que se enganou e que elas são pretas.\n\nElas desconfiam dele, fazem pressão para ver as toalhas e ele acaba reconhecendo que mentiu. Elas ficam muito decepcionadas e desistem de participar. Ao saber disso, a banda Jota Qwert também pula fora do barco.\n\n\Ao ver Roque abatido com o iminente fracasso, seu pai, Lucio Fernando, oferece a Roque o estúdio e o salão da associação dos funcionários da sua fábrica, a Meia Meia Meia, para realizar o evento. Assinando um contrato ele também teria disponível o dinheiro necessário para trazer as bandas que quisesse.\n\n\Roque nunca deixou o dinheiro e a influência de seu pai interferir em sua carreira artística e se sentiu incomodado com a proposta. Ao mesmo tempo, ficou balançado porque esse contrato seria a chance de realizar o maior sonho da sua vida!\n\n\Roque deve assinar o contrato?\n\n- Sim: 07\n\n- Não: 06"))  
            if(h3 == 7){
                prompt("Roque coloca o orgulho de lado e se dobra à proposta de seu pai, assina o contrato e consegue o financiamento para a realização do evento. O festival atinge um sucesso gigantesco, porém somente no submundo da música.\n\n\Fim.")
            }
            else{
                prompt("Roque lutou a vida inteira, tocando músicas que não gostava para poder alcançar seu próprio sucesso sem que ninguém pudesse jogar em sua cara que ele só chegou lá por causa do seu pai.\n\nEle não vai jogar tudo isso fora agora. Nem passou pela cabeça dele aceitar esse contrato.\n\nNão tem bandas, não tem dinheiro, não tem festival.\n\nEle resolve fazer um mini show apenas, com sua própria banda que toca sucessos do samba em ritmo de Rock, a Roda de Roque.\n\nEnquanto se preparava para tocar, ele se sentiu muito triste por ter mentido para as Tias Fofinhas. Muito triste. Tão triste que acabou compondo uma música contando a história do que ele fez e o qual mal se sentia por isso. O refrão repetia “Perdão” incessantemente.  O nome da música é “Perdão”. \n\nAs Tias Fofinhas assistiram a transmissão, se emocionaram com a letra e com a emoção genuína de Roque e o perdoaram. Prometeram tocar no Rock in Reels se ele quiser retomar seu projeto.\n\nFim.")
            }
    
        }
}