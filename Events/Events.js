
        document.querySelector(".child").addEventListener
        ("click", (e)=>{
            e.stopPropagation()
            alert("Child was clicked")
        })

        document.querySelector(".childContainer").addEventListener
        ("click",(e) =>{
            e.stopPropagation()
            alert("childContainer was clicked")
        }) 

        document.querySelector(".container").addEventListener
        ("click",(e)=>{
            alert("container was clicked")
        })

        function getrandomcolor(){
            let val1 = Math.ceil(0 + Math.random()*255);
            let val2 = Math.ceil(0 + Math.random()*255);
            let val3 = Math.ceil(0 + Math.random()*255);
            return `rgb(${val1}, ${val2}, ${val3})`
        }

        setInterval(() => {
            document.querySelector(".childContainer").style.background = getrandomcolor();
        }, 1000);


        //cleartimeout(1)