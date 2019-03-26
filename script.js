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
