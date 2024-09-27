let gameSeq = [];
        let userSeq = [];
        let btns = ["yellow", "pink", "green", "purple"]
        let started = false;
        let level = 0;
        let h2 = document.querySelector('h2')

        document.addEventListener("keypress", function () {
            if (started == false) {
                console.log("Game is started")
                started = true;
                levelUp();
            }
        });

        function gameFlash(btn) {
            btn.classList.add("flash")
            setTimeout(function () {
                btn.classList.remove("flash")
            }, 250)
        }

        function userflash(btn) {
            btn.classList.add("userFlash")
            setTimeout(function () {
                btn.classList.remove("userFlash")
            }, 250)
        }

        function levelUp() {

            userSeq=[]
            
            level++;
            h2.innerText = `Level ${level}`
            let randInx = Math.floor(Math.random() * 3);
            let randColor = btns[randInx];
            let randbtn = document.querySelector(`.${randColor}`);
            // console.log(randColor)
            // console.log(randInx)
            // console.log(randbtn)
            gameSeq.push(randColor);
            console.log(gameSeq)
            gameFlash(randbtn);

        }
        function checkAns(idx) {
            // console.log("Current Level : ",level)
            // let idx = level - 1;
            if (userSeq[idx] === gameSeq[idx]) {
                if (userSeq.length == gameSeq.length) {
                    setTimeout(levelUp,1000)
                }
            }
            else {
                h2.innerHTML = `Game Over!Your score was <b>${level}</b>.<br> Press any key to start`
                document.querySelector('body').style.backgroundColor="#dc3545"
                setTimeout(function() {
                    document.querySelector('body').style.backgroundColor="white"
                },150)
                reset();
            }
        }
        function btnPress() {
            // console.log(this)
            let btn = this
            userflash(btn)

            userColor = btn.getAttribute('id')
            userSeq.push(userColor);
            checkAns(userSeq.length-1)
        }

        let allBtn = document.querySelectorAll('.btn')
        for (btn of allBtn) {
            btn.addEventListener('click', btnPress)
        }

        function reset() {
            started=false
            gameSeq=[];
            userSeq=[];
            level=0;
        }
