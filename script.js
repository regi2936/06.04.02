        document.querySelector("#menuknap").addEventListener("click", toggleMenu);

        function toggleMenu() {
            console.log("Toogle menu");
            document.querySelector("#menu").classList.toggle("hidden");

            let erSkjult = document.querySelector("#menu").classList.contains("hidden");


            if (erSkjult == true) {
                document.querySelector("#menuknap").textContent = "☰";
            } else {
                document.querySelector("#menuknap").textContent = "X";
            }
        }




        let data = [10, 60, 80, 65, 76, 90, 74, 75, 80, 30];

        document.querySelectorAll(".bars .bar").forEach((sojle, i) => {

            sojle.setAttribute("y2", (190 - (1.8 * data[i])));
            sojle.setAttribute("data-value", data[i]);

        })

        document.querySelector(".bars").addEventListener("mouseover", e => {
            console.log(e.target.getAttribute("data-value"));
        })





        let valueArray = [0, 0, 0];
        let offsetArray = [0, 0, 0, 0];
        let omkreds = 200 * Math.PI;
        let myData = [0, 0, 0];
        document.querySelector(".cykel").addEventListener("click", lavArray);
        document.querySelector(".hjelm").addEventListener("click", lavArray);
        document.querySelector(".lygte").addEventListener("click", lavArray);


        function lavArray() {
            // console.log(this.classList);



            if (this.classList.value == "cykel") {
                console.log("CYKEL");
                myData[0] = omkreds / 100 * 10;
                offsetArray[1] = myData[0];
            }
            console.log(myData);

            if (this.classList.value == "hjelm") {
                console.log("HJEML");
                myData[1] = omkreds / 100 * 50;
                offsetArray[2] = offsetArray[1] + myData[1];
            }
            console.log(myData);

            if (this.classList.value == "lygte") {
                console.log("LYGTE");
                myData[2] = omkreds / 100 * 40;
                offsetArray[3] = offsetArray[2] + myData[2];
            }
            console.log("offset: ", offsetArray);
            animer();


        }



        function animer() {
            document.querySelectorAll(".piechart circle").forEach((pie, i) => {
                pie.style.strokeDasharray = myData[i] + " " + omkreds;
                pie.style.strokeDashoffset = -offsetArray[i];
                //pie.setAttribute("data-sikkerhed", myData[i]);
                console.log(pie);
            });
        }
