let activityModule = (function () {

    // @param  parents 
    //         object parents from CodeChallenge.js 
    // @return 
    //         a HashMap key is the parent's name, value is their children's age
    //         e.g. {Henry: 2, ...}

    let parentToAge = function (parents) {
        let ageMap = {};
        parents.forEach (element => {
            ageMap[element.parent] = element.child['age'];
        });
        return ageMap;
    };
    
    //  @param  curriculum 
    //          curriculum object from from CodeChallenge.js
    //  @return 
    //          a HashMap key is the children's age, value is activity array
    //          e.g. {1 : ["Try singing a song together", "Point and name objects."] }

    
    let ageToActivity = function (curriculum) {
        let activityMap = {}; 
        curriculum.forEach (element => {
            activityMap[element.age] = element.activity;
        });
        return activityMap;
    };
    
    //  @param  ageMap
    //          a hashmap from the return result from parentToAge()
    //          activityMap
    //          a hashmap from the return result from ageToActivity()
    //  @return 
    //          a HashMap key is the parent's name, value is activity array
    //          e.g. {Emilia : ["Try singing a song together", "Point and name objects."] }
    //          console.log(nameActMapBuilder(parentToAge(parents),ageToActivity(curriculum)));
    let nameActMapBuilder = function (ageMap, activityMap) {
        let nameActivityMap = {}; 
        for (let ele in ageMap) {
            let ageInAgeMap = ageMap[ele];
            if (ageInAgeMap in activityMap) {
                let activities = activityMap[ageInAgeMap];
                nameActivityMap [ele] = activities;
            } else {
                nameActivityMap[ele] =[];
            }
        }
        return nameActivityMap;
    };
   
   let formedData = nameActMapBuilder(parentToAge(parents),ageToActivity(curriculum));

   let tbody = document.getElementById("tbody");
  
    //  @param  data
    //          a hashmap from the return result from nameActMapBuilder()
    //  @return 
    //          an object with all functions need to be printed in console and front end

   class NameActivityData {
        constructor (data) {
            this.data = data;
        }
    //  @param  name
    //          a string from the user input
    //  @return 
    //          a boolean check if data map contains name key
        hasName (name) {
            if (this.data[name]) {
                return true;
            } else {
                return false;
            }
        }
    
        disappear () {
            for (let item of document.querySelectorAll(".btn-group")) {
                item.classList.add("disappear");
            }

            for (let item of document.querySelectorAll(".input-group")) {
                item.classList.add("disappear");
            }
           document.getElementById("info").classList.add("disappear");
        }

    //  @param    
    //  @return 
    //  [MAIN REQUIREMENT]
    //        A front end table and console result
    //        cycles through all the parents and prints to the terminal the proper activities for
    //        their child's age group. When there are no more activities for that parent,
    //        print “curriculum complete!” and move on to the next parent.  

        printAll () {
            this.disappear();
            for (let ele in this.data) {
                if (this.data[ele].length === 0) {
                    let tr = document.createElement("tr");
                    if (tbody.contains(tr)) {
                        let oldTr = document.getElementsByTagName("tr");
                        tbody.replaceChild(oldTr, tr);
                    } 
                    tbody.appendChild(tr);
                    tr.innerHTML = `<td>${ele}</td><td>You don't have curriculum!</td>`;
                    console.log(`${ele} :You don't have curriculum!`);
                } else {
                    let tr = document.createElement("tr");
                    tbody.appendChild(tr);
                    tr.innerHTML = `<td>${ele}</td><td>${this.data[ele]}</td>`;
                    console.log(`${ele} : ${this.data[ele]}`);
                    console.log("curriculum complete!");
                }
                let tr = document.createElement("tr");
                tbody.appendChild(tr);
                tr.innerHTML = '<td>' + '' + '</td>' + '<td>' + "<span style='color:#4cae4c;'>Curriculum complete! Now, it's beach time!<span>" + '</td>';
            }
        }

    //  @param    
    //  @return 
    //  [REQUIREMENT 4]
    //        A front end table and console result
    //        Print one activity at a time per parent and continue cycling through until
    //        all parents have recieved all their activities.  
        
        print () {
            this.disappear();
            for (let ele in this.data) {
                if (this.data[ele].length === 0) {
                    let tr = document.createElement("tr");
                    tbody.appendChild(tr);
                    tr.innerHTML = `<td>${ele}</td><td><span style='color:#4cae4c;'>NO ACTIVITIES! YOU ARE FREEE!!!<span></td>`;
                    console.log(`${ele}: You don't have any activities!`);
                   
                }
                this.data[ele].forEach (element => {
                    let tr = document.createElement("tr");
                    tbody.appendChild(tr);
                    tr.innerHTML = `<td>${ele}</td><td>${element}</td>`;
                    // tr.innerHTML = '<td>' + ele + '</td>' + '<td>' + element + '</td>';
                    console.log(`${ele}: ${element}`);
                })
            }
        }

    //  @param  name
    //          a string from the user input
    //  @return 
    //          a boolean check if name is empty space, null, or more than limited character
        
        validName (name) {
            name = document.getElementById("parentIpt").value;
            if (name.match(/^\s+$/) || name =='') {
                return false;
            }
            return true;
        }
    
    //  @param  name
    //          a string from the user input
    //  @return 
    //  [REQUIREMENT 3]
    //          insert a parent into data hashmap

        addParent (name) {
            name = document.getElementById("parentIpt").value;
            if (!this.validName(name)) {
                bootbox.alert({
                    message: 'Please enter a valid name, like "John"',
                    size: 'small'
                });
            } else {
                if (this.data[name] == undefined) {
                    this.data[name] = [];
                }
                bootbox.alert({
                    message: `${name} was successfully added!`,
                    size: 'small',
                    callback: function () {
                       document.getElementById('addActivity').disabled = false;
                    }
                });
            }
        }
    //  @param  name
    //          a string from the user input
    //          activity
    //          a string from the user input
    //  @return 
    //  [REQUIREMENT 3]
    //          check if name in data hash map, if name exsists insert a activity
        addActivity (name, activity) {
            name = document.getElementById("parentIpt").value;
            activity = document.getElementById("activityIpt").value;
            if (this.hasName(name)) {
                this.data[name].push(activity);
                bootbox.alert({
                    message: `${activity} was successfully added!`,
                    size: 'small',
                    callback: function () {
                        document.getElementById("activityIpt").value = '';
                    }
                });
            }
        }

        addBtnGropListener () {
            for (let item of document.querySelectorAll(".btn-group")) {
                item.addEventListener("click", (evt) => {
                    switch (evt.target.id) {
                        case "allActicity" : 
                        this.printAll();
                        break;
                        case "byParent" : 
                        this.print(); 
                        break;
                    }
                }, false);
            }
        }

        addInputGropListener () {
            for (let item of document.querySelectorAll(".input-group")) {
                item.addEventListener("click", (evt) => {
                    switch (evt.target.id) {
                        case "addParent" : 
                        this.addParent(name); 
                        break;
                        case "addActivity" : 
                        this.addActivity(); 
                        break;
                    }
                }, false);
            }
        }

        startApp () {
            this.addBtnGropListener();
            this.addInputGropListener();
        } 
   }
   return new NameActivityData(formedData);
}());

window.onload = activityModule.startApp();




