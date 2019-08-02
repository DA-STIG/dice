
var rollOne= Math.floor(Math.random()*6)+1;
var rollTwo= Math.floor(Math.random()*7)+1;

if (rollOne === 1) {
              document.querySelector(".img1").setAttribute("src","images/dice1.png");
            } else if (rollOne === 2) {
                document.querySelector(".img1").setAttribute("src","images/dice2.png");
              }else if (rollOne === 3) {
                  document.querySelector(".img1").setAttribute("src","images/dice3.png");
                }else if (rollOne === 4) {
                    document.querySelector(".img1").setAttribute("src","images/dice4.png");
                  }else if (rollOne === 5) {
                      document.querySelector(".img1").setAttribute("src","images/dice5.png");
                    }else if (rollOne === 6) {
                        document.querySelector(".img1").setAttribute("src","images/dice6.png");
                      }

                      if (rollTwo === 1) {
                        document.querySelector(".img2").setAttribute("src","images/dice1.png");
                      } else if (rollTwo === 2) {
                          document.querySelector(".img2").setAttribute("src","images/dice2.png");
                        }else if (rollTwo=== 3) {
                            document.querySelector(".img2").setAttribute("src","images/dice3.png");
                          }else if (rollTwo === 4) {
                              document.querySelector(".img2").setAttribute("src","images/dice4.png");
                            }else if (rollTwo === 5) {
                                document.querySelector(".img2").setAttribute("src","images/dice5.png");
                              }else if (rollTwo === 6) {
                                  document.querySelector(".img2").setAttribute("src","images/dice6.png");
                                }

                if (rollOne > rollTwo) {
                  document.querySelector('h1').innerHTML =" 🚩 Player 1 wins ";
                              }
                              else if (rollTwo > rollOne){
                                document.querySelector('h1').innerHTML =" 🚩 Player 2 wins ";
                              }
                              else if ((rollOne === rollTwo)||(rollTwo === rollOne)){
                                document.querySelector('h1').innerHTML =" ✌🏻Egalité, Fraternité Liberté✌🏻"+ "<br>" + "🇫🇷vive la France🇫🇷";
                              }
