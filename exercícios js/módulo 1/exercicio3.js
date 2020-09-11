var skills = ["Javascript", "ReactJS", "React Native"];

        function temHabilidade (skills) {
            let res = skills.indexOf("Javascript")
            if (res >= 0) {
                return true;
            } else {
                return false;
            }
        }
        
        console.log(temHabilidade(skills)); //true ou false