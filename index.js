/// repo location: /opt/homebrew/var/www

/// ------------------------------------
/// Create Arrays and Dictionaries 
/// ------------------------------------
let infoArray = [];
let infoDict = {};
let lipArray = [];
let lipDict = {};
let partDict = {};
let mandArray = [];
let mandDict = {};
let dieArray = [];
let dieDict = {};
let backerArray = [];
let backerDict = {};
let bolArray = [];
let bolDict = {};
let nextArray = [];
let nextDict = {};
let newJobArray = {};
let partArray = [];

let lipSoftArray = [];
let lipSoftDict = {};
let mandSoftArray = [];
let mandSoftDict = {};
let dieSoftArray = [];
let dieSoftDict = {};
let backerSoftArray = [];
let backerSoftDict = {};
let bolSoftArray = [];
let bolSoftDict = {};

let lipHardArray = [];
let lipHardDict = {};
let mandHardArray = [];
let mandHardDict = {};
let dieHardArray = [];
let dieHardDict = {};

function getDatabase(){
    infoxhp = new XMLHttpRequest();
    infoxhp.open('GET', 'get_job_table.php', true);
    infoxhp.send();
    infoxhp.onreadystatechange = function(){
        if (this.readyState == 4 && this.status == 200){
            let data = JSON.parse(this.responseText);
            for (i in data){
                infoArray = [];

                infoArray.push(data[i].die_number);
                infoArray.push(data[i].job_type);
                infoArray.push(data[i].job_diameter);
                infoArray.push(data[i].job_customer);
                infoArray.push(data[i].job_status);
                infoArray.push(data[i].lip_required);
                infoArray.push(data[i].mand_required);
                infoArray.push(data[i].die_required);
                infoArray.push(data[i].backer_required);
                infoArray.push(data[i].bolster_required);
                infoArray.push(data[i].next_stage);
                infoArray.push(data[i].scrap_notes);
                infoArray.push(data[i].part_required);

                infoDict[data[i].work_order] = infoArray;
            }
        }
    };

    partxhp = new XMLHttpRequest();
    partxhp.open('GET', 'get_part_table.php', true);
    partxhp.send();
    partxhp.onreadystatechange = function(){
        if (this.readyState == 4 && this.status == 200){
            let data = JSON.parse(this.responseText);
            for (i in data){
                partArray = [];

                partArray.push(data[i].design_start);
                partArray.push(data[i].design_finish);
                partArray.push(data[i].model_start);
                partArray.push(data[i].model_finish);
                partArray.push(data[i].prog_start);
                partArray.push(data[i].prog_finish);
                partArray.push(data[i].turning_start);
                partArray.push(data[i].turning_finish);
                partArray.push(data[i].soft_mac_start);
                partArray.push(data[i].soft_mac_finish);
                partArray.push(data[i].heat_treat_send);
                partArray.push(data[i].heat_treat_back);
                partArray.push(data[i].hard_mac_start);
                partArray.push(data[i].hard_mac_finish);
                partArray.push(data[i].ramspark_start);
                partArray.push(data[i].ramspark_finish);
                partArray.push(data[i].section_mill_start);
                partArray.push(data[i].section_mill_finish);
                partArray.push(data[i].wirespark_start);
                partArray.push(data[i].wirespark_finish);
                partArray.push(data[i].finishing_start);
                partArray.push(data[i].finishing_finish);
                partArray.push(data[i].packing_start);
                partArray.push(data[i].packing_finish);

                partDict[data[i].work_order] = partArray;
                
            }
        }
    };

    lipxhp = new XMLHttpRequest();
    lipxhp.open('GET', 'get_lip_table.php', true);
    lipxhp.send();
    lipxhp.onreadystatechange = function(){
        if (this.readyState == 4 && this.status == 200){
            let data = JSON.parse(this.responseText);
            for (i in data){
                lipArray = [];

                lipArray.push(data[i].design_start);
                lipArray.push(data[i].design_finish);
                lipArray.push(data[i].model_start);
                lipArray.push(data[i].model_finish);
                lipArray.push(data[i].prog_start);
                lipArray.push(data[i].prog_finish);
                lipArray.push(data[i].turning_start);
                lipArray.push(data[i].turning_finish);
                lipArray.push(data[i].soft_mac_start);
                lipArray.push(data[i].soft_mac_finish);
                lipArray.push(data[i].heat_treat_send);
                lipArray.push(data[i].heat_treat_back);
                lipArray.push(data[i].hard_mac_start);
                lipArray.push(data[i].hard_mac_finish);
                lipArray.push(data[i].ramspark_start);
                lipArray.push(data[i].ramspark_finish);
                lipArray.push(data[i].section_mill_start);
                lipArray.push(data[i].section_mill_finish);
                lipArray.push(data[i].wirespark_start);
                lipArray.push(data[i].wirespark_finish);
                lipArray.push(data[i].finishing_start);
                lipArray.push(data[i].finishing_finish);
                lipArray.push(data[i].packing_start);
                lipArray.push(data[i].packing_finish);

                lipDict[data[i].work_order] = lipArray;
            }
        }
    };

    mandxhp = new XMLHttpRequest();
    mandxhp.open('GET', 'get_mand_table.php', true);
    mandxhp.send();
    mandxhp.onreadystatechange = function(){
        if (this.readyState == 4 && this.status == 200){
            let data = JSON.parse(this.responseText);
            for (i in data){
                mandArray = [];

                mandArray.push(data[i].design_start);
                mandArray.push(data[i].design_finish);
                mandArray.push(data[i].model_start);
                mandArray.push(data[i].model_finish);
                mandArray.push(data[i].prog_start);
                mandArray.push(data[i].prog_finish);
                mandArray.push(data[i].turning_start);
                mandArray.push(data[i].turning_finish);
                mandArray.push(data[i].soft_mac_start);
                mandArray.push(data[i].soft_mac_finish);
                mandArray.push(data[i].heat_treat_send);
                mandArray.push(data[i].heat_treat_back);
                mandArray.push(data[i].hard_mac_start);
                mandArray.push(data[i].hard_mac_finish);
                mandArray.push(data[i].ramspark_start);
                mandArray.push(data[i].ramspark_finish);
                mandArray.push(data[i].section_mill_start);
                mandArray.push(data[i].section_mill_finish);
                mandArray.push(data[i].wirespark_start);
                mandArray.push(data[i].wirespark_finish);
                mandArray.push(data[i].finishing_start);
                mandArray.push(data[i].finishing_finish);
                mandArray.push(data[i].packing_start);
                mandArray.push(data[i].packing_finish);

                mandDict[data[i].work_order] = mandArray;
            }
        }
    };

    diexhp = new XMLHttpRequest();
    diexhp.open('GET', 'get_die_table.php', true);
    diexhp.send();
    diexhp.onreadystatechange = function(){
        if (this.readyState == 4 && this.status == 200){
            let data = JSON.parse(this.responseText);
            for (i in data){
                dieArray = [];

                dieArray.push(data[i].design_start);
                dieArray.push(data[i].design_finish);
                dieArray.push(data[i].model_start);
                dieArray.push(data[i].model_finish);
                dieArray.push(data[i].prog_start);
                dieArray.push(data[i].prog_finish);
                dieArray.push(data[i].turning_start);
                dieArray.push(data[i].turning_finish);
                dieArray.push(data[i].soft_mac_start);
                dieArray.push(data[i].soft_mac_finish);
                dieArray.push(data[i].heat_treat_send);
                dieArray.push(data[i].heat_treat_back);
                dieArray.push(data[i].hard_mac_start);
                dieArray.push(data[i].hard_mac_finish);
                dieArray.push(data[i].ramspark_start);
                dieArray.push(data[i].ramspark_finish);
                dieArray.push(data[i].section_mill_start);
                dieArray.push(data[i].section_mill_finish);
                dieArray.push(data[i].wirespark_start);
                dieArray.push(data[i].wirespark_finish);
                dieArray.push(data[i].finishing_start);
                dieArray.push(data[i].finishing_finish);
                dieArray.push(data[i].packing_start);
                dieArray.push(data[i].packing_finish);

                dieDict[data[i].work_order] = dieArray;
            }
        }
    };

    backerxhp = new XMLHttpRequest();
    backerxhp.open('GET', 'get_backer_table.php', true);
    backerxhp.send();
    backerxhp.onreadystatechange = function(){
        if (this.readyState == 4 && this.status == 200){
            let data = JSON.parse(this.responseText);
            for (i in data){
                backerArray = [];

                backerArray.push(data[i].design_start);
                backerArray.push(data[i].design_finish);
                backerArray.push(data[i].model_start);
                backerArray.push(data[i].model_finish);
                backerArray.push(data[i].prog_start);
                backerArray.push(data[i].prog_finish);
                backerArray.push(data[i].turning_start);
                backerArray.push(data[i].turning_finish);
                backerArray.push(data[i].soft_mac_start);
                backerArray.push(data[i].soft_mac_finish);
                backerArray.push(data[i].heat_treat_send);
                backerArray.push(data[i].heat_treat_back);
                backerArray.push(data[i].hard_mac_start);
                backerArray.push(data[i].hard_mac_finish);
                backerArray.push(data[i].ramspark_start);
                backerArray.push(data[i].ramspark_finish);
                backerArray.push(data[i].section_mill_start);
                backerArray.push(data[i].section_mill_finish);
                backerArray.push(data[i].wirespark_start);
                backerArray.push(data[i].wirespark_finish);
                backerArray.push(data[i].finishing_start);
                backerArray.push(data[i].finishing_finish);
                backerArray.push(data[i].packing_start);
                backerArray.push(data[i].packing_finish);

                backerDict[data[i].work_order] = backerArray;
            }
        }
    };

    bolxhp = new XMLHttpRequest();
    bolxhp.open('GET', 'get_bolster_table.php', true);
    bolxhp.send();
    bolxhp.onreadystatechange = function(){
        if (this.readyState == 4 && this.status == 200){
            let data = JSON.parse(this.responseText);
            for (i in data){
                bolArray = [];

                bolArray.push(data[i].design_start);
                bolArray.push(data[i].design_finish);
                bolArray.push(data[i].model_start);
                bolArray.push(data[i].model_finish);
                bolArray.push(data[i].prog_start);
                bolArray.push(data[i].prog_finish);
                bolArray.push(data[i].turning_start);
                bolArray.push(data[i].turning_finish);
                bolArray.push(data[i].soft_mac_start);
                bolArray.push(data[i].soft_mac_finish);
                bolArray.push(data[i].heat_treat_send);
                bolArray.push(data[i].heat_treat_back);
                bolArray.push(data[i].hard_mac_start);
                bolArray.push(data[i].hard_mac_finish);
                bolArray.push(data[i].ramspark_start);
                bolArray.push(data[i].ramspark_finish);
                bolArray.push(data[i].section_mill_start);
                bolArray.push(data[i].section_mill_finish);
                bolArray.push(data[i].wirespark_start);
                bolArray.push(data[i].wirespark_finish);
                bolArray.push(data[i].finishing_start);
                bolArray.push(data[i].finishing_finish);
                bolArray.push(data[i].packing_start);
                bolArray.push(data[i].packing_finish);

                bolDict[data[i].work_order] = bolArray;
            }
        }
    };

    nextxhp = new XMLHttpRequest();
    nextxhp.open('GET', 'get_next_table.php', true);
    nextxhp.send();
    nextxhp.onreadystatechange = function(){
        if (this.readyState == 4 && this.status == 200){
            let data = JSON.parse(this.responseText);
            for (i in data){
                nextArray = [];

                nextArray.push(data[i].lip);
                nextArray.push(data[i].mandrel);
                nextArray.push(data[i].dieplate);
                nextArray.push(data[i].backer);
                nextArray.push(data[i].bolster);

                nextDict[data[i].work_order] = nextArray;
            }
        }
    };

    lipsoftxhp = new XMLHttpRequest();
    lipsoftxhp.open('GET', 'get_lip_soft_table.php', true);
    lipsoftxhp.send();
    lipsoftxhp.onreadystatechange = function(){
        if (this.readyState == 4 && this.status == 200){
            let data = JSON.parse(this.responseText);
            for (i in data){
                lipSoftArray = [];

                lipSoftArray.push(data[i].lip_front_start);
                lipSoftArray.push(data[i].lip_front_finish);
                lipSoftArray.push(data[i].lip_back_start);
                lipSoftArray.push(data[i].lip_back_finish);
                lipSoftArray.push(data[i].lip_front_machine);
                lipSoftArray.push(data[i].lip_back_machine);
                lipSoftArray.push(data[i].mac_status);

                lipSoftDict[data[i].work_order] = lipSoftArray;
            }
        }
    };

    mandsoftxhp = new XMLHttpRequest();
    mandsoftxhp.open('GET', 'get_mand_soft_table.php', true);
    mandsoftxhp.send();
    mandsoftxhp.onreadystatechange = function(){
        if (this.readyState == 4 && this.status == 200){
            let data = JSON.parse(this.responseText);
            for (i in data){
                mandSoftArray = [];

                mandSoftArray.push(data[i].port_front_start);
                mandSoftArray.push(data[i].port_front_finish);
                mandSoftArray.push(data[i].port_back_start);
                mandSoftArray.push(data[i].port_back_finish);
                mandSoftArray.push(data[i].port_front_machine);
                mandSoftArray.push(data[i].port_back_machine);
                mandSoftArray.push(data[i].mac_status);

                mandSoftDict[data[i].work_order] = mandSoftArray;
            }
        }
    };

    diesoftxhp = new XMLHttpRequest();
    diesoftxhp.open('GET', 'get_die_soft_table.php', true);
    diesoftxhp.send();
    diesoftxhp.onreadystatechange = function(){
        if (this.readyState == 4 && this.status == 200){
            let data = JSON.parse(this.responseText);
            for (i in data){
                dieSoftArray = [];

                dieSoftArray.push(data[i].die_bearing_start);
                dieSoftArray.push(data[i].die_bearing_finish);
                dieSoftArray.push(data[i].die_backmill_start);
                dieSoftArray.push(data[i].die_backmill_finish);
                dieSoftArray.push(data[i].die_bearing_machine);
                dieSoftArray.push(data[i].die_backmill_machine);
                dieSoftArray.push(data[i].mac_status);

                dieSoftDict[data[i].work_order] = dieSoftArray;
            }
        }
    };

    backersoftxhp = new XMLHttpRequest();
    backersoftxhp.open('GET', 'get_backer_soft_table.php', true);
    backersoftxhp.send();
    backersoftxhp.onreadystatechange = function(){
        if (this.readyState == 4 && this.status == 200){
            let data = JSON.parse(this.responseText);
            for (i in data){
                backerSoftArray = [];

                backerSoftArray.push(data[i].backer_front_start);
                backerSoftArray.push(data[i].backer_front_finish);
                backerSoftArray.push(data[i].backer_back_start);
                backerSoftArray.push(data[i].backer_back_finish);
                backerSoftArray.push(data[i].backer_front_machine);
                backerSoftArray.push(data[i].backer_back_machine);
                backerSoftArray.push(data[i].mac_status);

                backerSoftDict[data[i].work_order] = backerSoftArray;
            }
        }
    };

    bolsoftxhp = new XMLHttpRequest();
    bolsoftxhp.open('GET', 'get_bol_soft_table.php', true);
    bolsoftxhp.send();
    bolsoftxhp.onreadystatechange = function(){
        if (this.readyState == 4 && this.status == 200){
            let data = JSON.parse(this.responseText);
            for (i in data){
                bolSoftArray = [];

                bolSoftArray.push(data[i].bol_front_start);
                bolSoftArray.push(data[i].bol_front_finish);
                bolSoftArray.push(data[i].bol_back_start);
                bolSoftArray.push(data[i].bol_back_finish);
                bolSoftArray.push(data[i].bol_front_machine);
                bolSoftArray.push(data[i].bol_back_machine);
                bolSoftArray.push(data[i].mac_status);

                bolSoftDict[data[i].work_order] = bolSoftArray;
            }
        }
    };

    liphardxhp = new XMLHttpRequest();
    liphardxhp.open('GET', 'get_lip_hard_table.php', true);
    liphardxhp.send();
    liphardxhp.onreadystatechange = function(){
        if (this.readyState == 4 && this.status == 200){
            let data = JSON.parse(this.responseText);
            for (i in data){
                lipHardArray = [];

                lipHardArray.push(data[i].lip_front_start);
                lipHardArray.push(data[i].lip_front_finish);
                lipHardArray.push(data[i].lip_back_start);
                lipHardArray.push(data[i].lip_back_finish);
                lipHardArray.push(data[i].lip_front_machine);
                lipHardArray.push(data[i].lip_back_machine);
                lipHardArray.push(data[i].mac_status);

                lipHardDict[data[i].work_order] = lipHardArray;
            }
        }
    };

    mandhardxhp = new XMLHttpRequest();
    mandhardxhp.open('GET', 'get_mand_hard_table.php', true);
    mandhardxhp.send();
    mandhardxhp.onreadystatechange = function(){
        if (this.readyState == 4 && this.status == 200){
            let data = JSON.parse(this.responseText);
            for (i in data){
                mandHardArray = [];

                mandHardArray.push(data[i].port_hard_start);
                mandHardArray.push(data[i].port_hard_finish);
                mandHardArray.push(data[i].port_polish_start);
                mandHardArray.push(data[i].port_polish_finish);
                mandHardArray.push(data[i].port_hard_machine);
                mandHardArray.push(data[i].port_polish_machine);
                mandHardArray.push(data[i].mac_status);

                mandHardDict[data[i].work_order] = mandHardArray;
            }
        }
    };

    diehardxhp = new XMLHttpRequest();
    diehardxhp.open('GET', 'get_die_hard_table.php', true);
    diehardxhp.send();
    diehardxhp.onreadystatechange = function(){
        if (this.readyState == 4 && this.status == 200){
            let data = JSON.parse(this.responseText);
            for (i in data){
                dieHardArray = [];

                dieHardArray.push(data[i].die_front_start);
                dieHardArray.push(data[i].die_front_finish);
                dieHardArray.push(data[i].die_back_start);
                dieHardArray.push(data[i].die_back_finish);
                dieHardArray.push(data[i].die_front_machine);
                dieHardArray.push(data[i].die_back_machine);
                dieHardArray.push(data[i].mac_status);

                dieHardDict[data[i].work_order] = dieHardArray;
            }
        }
    };

    console.log("mand:");
    console.log(mandHardDict)
}

// Get length of infoDict
function getNumberOfJobs(){
    let count = 0;
    for (let i in infoDict) {
        if (infoDict.hasOwnProperty(i)){
            count++;
        }
    }
    return(count);
}

//Creates an array of keys for infoDict dict
function createKeyArray(){
    let keyArray = [];
    for (let key in infoDict){
        keyArray.push(key);
        return(keyArray);
    }
}

function removeElementsOuterContent(){
    const el = document.getElementById('outer-content-container');
    while(el.firstChild) el.removeChild(el.firstChild);
}

function removeElementsInnerContent(){
    const el = document.getElementById('inner-content-container');
    while(el.firstChild) el.removeChild(el.firstChild);
}

function removeElementsHeaderContent(){
    const el = document.getElementById('contextual-menu-container');
    while(el.firstChild) el.removeChild(el.firstChild);
}

function removeElementsFromDefined(anId){
    const el = document.getElementById(anId);
    while(el.firstChild) {
        el.removeChild(el.lastChild);
    }
}

function insertJobElements(){
    let colourChooser = 0;
    let elementColour = "#E8E9EC;";
    for (let i=0; i<=100; i++){
        colourChooser += 1;
        const div = document.createElement("div");
        div.id = i;
        div.className = "list-object-container ";
        div.style = "background-color: white;";
        document.getElementById("inner-content-container").appendChild(div);  

        const shownElementsContainer = document.createElement("div");
        shownElementsContainer.id = "shownElementsContainer" + i;
        shownElementsContainer.className = "shownElementsContainer";
        //shownElementsContainer.style = "background-color: lightgrey;";
        document.getElementById(i).appendChild(shownElementsContainer);  

        const columnContainer = document.createElement("div");
        columnContainer.id = "columnContainer" + i;
        columnContainer.className = "columnContainer";
        //columnContainer.style = "background-color: lightgrey;";
        document.getElementById(shownElementsContainer.id).appendChild(columnContainer); 

            if(colourChooser % 2 === 0){
                elementColour = "background-color: #D9D9D9;";
            }
            else{
                elementColour = "background-color: #E8E9EC;";
            }

            const WoColumn = document.createElement("div");
            WoColumn.id = "WoColumn" + i;
            WoColumn.className = "column-item";
            WoColumn.style = elementColour;
            document.getElementById(columnContainer.id).appendChild(WoColumn); 

            const dieColumn = document.createElement("div");
            dieColumn.id = "dieColumn" + i;
            dieColumn.className = "column-item";
            dieColumn.style = elementColour;
            document.getElementById(columnContainer.id).appendChild(dieColumn); 

            const custColumn = document.createElement("div");
            custColumn.id = "custColumn" + i;
            custColumn.className = "column-item";
            custColumn.style = elementColour;
            document.getElementById(columnContainer.id).appendChild(custColumn); 

            const typeColumn = document.createElement("div");
            typeColumn.id = "typeColumn" + i;
            typeColumn.className = "column-item";
            typeColumn.style = elementColour;
            document.getElementById(columnContainer.id).appendChild(typeColumn); 

            const diaColumn = document.createElement("div");
            diaColumn.id = "diaColumn" + i;
            diaColumn.className = "column-item";
            diaColumn.style = elementColour;
            document.getElementById(columnContainer.id).appendChild(diaColumn); 

            const orderNoColumn = document.createElement("div");
            orderNoColumn.id = "orderNoColumn" + i;
            orderNoColumn.className = "column-item";
            orderNoColumn.style = elementColour;
            document.getElementById(columnContainer.id).appendChild(orderNoColumn); 

            const startDateColumn = document.createElement("div");
            startDateColumn.id = "startDateColumn" + i;
            startDateColumn.className = "column-item";
            startDateColumn.style = elementColour;
            document.getElementById(columnContainer.id).appendChild(startDateColumn); 

            const finishDateColumn = document.createElement("div");
            finishDateColumn.id = "finishDateColumn" + i;
            finishDateColumn.className = "column-item";
            finishDateColumn.style = elementColour;
            document.getElementById(columnContainer.id).appendChild(finishDateColumn); 

            const onTimeDateColumn = document.createElement("div");
            onTimeDateColumn.id = "onTimeDateColumn" + i;
            onTimeDateColumn.className = "column-item";
            onTimeDateColumn.style = elementColour;
            document.getElementById(columnContainer.id).appendChild(onTimeDateColumn); 

            const statusColumn = document.createElement("div");
            statusColumn.id = "statusColumn" + i;
            statusColumn.className = "column-item";
            statusColumn.style = elementColour;
            document.getElementById(columnContainer.id).appendChild(statusColumn); 

        const jobButtonContainer = document.createElement("div");
        jobButtonContainer.id = "jobButtonContainer" + i;
        jobButtonContainer.className = "jobButtonContainer";
        jobButtonContainer.style = "background-color: lightgrey;";
        document.getElementById(shownElementsContainer.id).appendChild(jobButtonContainer); 

            const expandButton = document.createElement("div");
            expandButton.id = "expandButton" + i;
            expandButton.className = "expandButton";
            expandButton.style = "background-color: #999999;";
            document.getElementById(jobButtonContainer.id).appendChild(expandButton); 

                const expandIcon = document.createElement("img");
                expandIcon.setAttribute("height", "15");
                expandIcon.setAttribute("width", "15");
                expandIcon.src = 'img/arrow-down-sign-to-navigate.png';
                document.getElementById(expandButton.id).appendChild(expandIcon);
                //<a href="https://www.flaticon.com/free-icons/arrow" title="arrow icons">Arrow icons created by Freepik - Flaticon</a>
                //<a href="https://www.flaticon.com/free-icons/up-arrow" title="up arrow icons">Up arrow icons created by Roundicons - Flaticon</a>

            const openButton = document.createElement("div");
            openButton.id = "openButton" + i;
            openButton.className = "openButton";
            openButton.style = "background-color: #999999;";
            document.getElementById(jobButtonContainer.id).appendChild(openButton); 

                const openIcon = document.createElement("img");
                openIcon.setAttribute("height", "15");
                openIcon.setAttribute("width", "15");
                openIcon.src = 'img/share.png';
                document.getElementById(openButton.id).appendChild(openIcon);
                //<a href="https://www.flaticon.com/free-icons/export" title="export icons">Export icons created by Amazona Adorada - Flaticon</a>


        const hiddenElementsContainer = document.createElement("div");
        hiddenElementsContainer.id = "hiddenElementsContainer" + i;
        hiddenElementsContainer.className = "hiddenElementsContainer";
        hiddenElementsContainer.style = "background-color: pink;";
        document.getElementById(i).appendChild(hiddenElementsContainer);  

    }
}

function addExpandListeners(){
    let clickedIdLight = document.getElementsByClassName("expandButton");
    for (let i = 0; i < clickedIdLight.length; i++){
        clickedIdLight[i].addEventListener('click', expandGetClickedId);
    }
}

function addOpenListeners(){
    let clickedIdLight = document.getElementsByClassName("openButton");
    for (let i = 0; i < clickedIdLight.length; i++){
        clickedIdLight[i].addEventListener('click', openGetClickedId);
    }
}

function expandGetClickedId(){
    expandJobSummary(this.id);
}

function contractGetClickedId(){
    contractJobSummary(this.id);
}

function openGetClickedId(){
    createJobTable(this.id);
}

function expandJobSummary(anId){
    anId = anId.replace("expandButton", "");

    let expandDiv1 = document.getElementById(anId);
    let expandDiv2 = document.getElementById("hiddenElementsContainer" + anId);

    expandDiv1.style = "height: 120px";
    expandDiv2.style = "height: 85px";

    const el = document.getElementById("jobButtonContainer"+anId);
    while(el.firstChild) el.removeChild(el.firstChild);

    const collapseButton = document.createElement("div");
    collapseButton.id = "collapseButton" + anId;
    collapseButton.className = "collapseButton";
    collapseButton.style = "background-color: #999999;";
    document.getElementById("jobButtonContainer"+anId).appendChild(collapseButton); 

        const expandIcon = document.createElement("img");
        expandIcon.setAttribute("height", "15");
        expandIcon.setAttribute("width", "15");
        expandIcon.src = 'img/up-arrow.png';
        document.getElementById("collapseButton" + anId).appendChild(expandIcon);
        //<a href="https://www.flaticon.com/free-icons/arrow" title="arrow icons">Arrow icons created by Freepik - Flaticon</a>
        //<a href="https://www.flaticon.com/free-icons/up-arrow" title="up arrow icons">Up arrow icons created by Roundicons - Flaticon</a>

    const openButton = document.createElement("div");
    openButton.id = "openButton" + anId;
    openButton.className = "openButton";
    openButton.style = "background-color: #999999;";
    document.getElementById("jobButtonContainer"+anId).appendChild(openButton); 

        const openIcon = document.createElement("img");
        openIcon.setAttribute("height", "15");
        openIcon.setAttribute("width", "15");
        openIcon.src = 'img/share.png';
        document.getElementById("openButton" + anId).appendChild(openIcon);
        //<a href="https://www.flaticon.com/free-icons/export" title="export icons">Export icons created by Amazona Adorada - Flaticon</a>
    
    const contractId = document.getElementById("collapseButton" + anId);
    contractId.addEventListener('click', contractGetClickedId);

    const openId = document.getElementById("openButton" + anId);
    openId.addEventListener('click', openGetClickedId);
}

function contractJobSummary(anId){
    console.log(anId);
    anId = anId.replace("collapseButton", "");
    console.log(anId);

    let contractDiv1 = document.getElementById(anId);
    let contractDiv2 = document.getElementById("hiddenElementsContainer" + anId);

    contractDiv1.style = "height: 30px";
    contractDiv2.style = "height: 0px";

    const el = document.getElementById("jobButtonContainer"+anId);
    while(el.firstChild) el.removeChild(el.firstChild);

    const expandButton = document.createElement("div");
    expandButton.id = "expandButton" + anId;
    expandButton.className = "expandButton";
    expandButton.style = "background-color: #999999;";
    document.getElementById("jobButtonContainer"+anId).appendChild(expandButton); 

        const expandIcon = document.createElement("img");
        expandIcon.setAttribute("height", "15");
        expandIcon.setAttribute("width", "15");
        expandIcon.src = 'img/arrow-down-sign-to-navigate.png';
        document.getElementById("expandButton" + anId).appendChild(expandIcon);
        //<a href="https://www.flaticon.com/free-icons/arrow" title="arrow icons">Arrow icons created by Freepik - Flaticon</a>
        //<a href="https://www.flaticon.com/free-icons/up-arrow" title="up arrow icons">Up arrow icons created by Roundicons - Flaticon</a>

    const openButton = document.createElement("div");
    openButton.id = "openButton" + anId;
    openButton.className = "openButton";
    openButton.style = "background-color: #999999;";
    document.getElementById("jobButtonContainer"+anId).appendChild(openButton); 

        const openIcon = document.createElement("img");
        openIcon.setAttribute("height", "15");
        openIcon.setAttribute("width", "15");
        openIcon.src = 'img/share.png';
        document.getElementById("openButton" + anId).appendChild(openIcon);
        //<a href="https://www.flaticon.com/free-icons/export" title="export icons">Export icons created by Amazona Adorada - Flaticon</a>

    addExpandListeners();
    addOpenListeners();
}

function addSearchModalListner() {
    const searchModalId = document.getElementById("search-button");
    searchModalId.addEventListener('click', searchModal);
}

function searchModal() {
    // Get the modal
    var modal = document.getElementById("myModal");

    modal.style.display = "block";

    // Create container for form
    let new_div = document.createElement('div');
    let newClass ='search-container';
    new_div.className = newClass;
    new_div.id = 'searchContainer';
    document.getElementById('modal-content').appendChild(new_div);

    //Create a container for the form section header
    let search_header_div = document.createElement('div');
    let search_header_class ='search-header-container';
    search_header_div.className = search_header_class;
    search_header_div.id = 'search-header-container';
    document.getElementById('searchContainer').appendChild(search_header_div);   

    //Create title for the form
    let new_header = document.createElement('h3');
    let headerClass = 'formHeader';
    new_header.className = headerClass;
    document.getElementById('search-header-container').appendChild(new_header);

    //Populate and append the form title. 
    headerString = 'Enter Work Order Number: '; 
    new_header.appendChild(document.createTextNode(headerString));
    // Create line break
    let br = document.createElement('br');
    document.getElementById('searchContainer').appendChild(br.cloneNode());

        //Create a container for the form elements
        let wo_feild_div = document.createElement('div');
        let wo_feild_class ='feild_div';
        wo_feild_div.className = wo_feild_class;
        wo_feild_div.id = 'wo_feild_div';
        document.getElementById('searchContainer').appendChild(wo_feild_div); 

            // Create value field for selected option
            let valueInput = document.createElement('input');
            valueInput.setAttribute('type', 'text');
            valueInput.setAttribute('name', 'input');
            valueInput.setAttribute('placeholder', 'Work Order Number');
            valueInput.id = 'searchInput';

            document.getElementById('wo_feild_div').appendChild(valueInput);

            // Create a button and an event listner that passes the values contained in the form to function that updates the correct dictionary. 
            document.getElementById('searchContainer').appendChild(br.cloneNode());
            let actionButton = document.createElement('button');
            actionButton.appendChild(document.createTextNode('Submit'));
            actionButton.addEventListener('click', function() {validateSearch(document.getElementById('searchInput').value)});
            document.getElementById('wo_feild_div').appendChild(actionButton);

            let dieno_header_div = document.createElement('div');
            let dieno_header_class ='search-header-container';
            dieno_header_div.className = dieno_header_class;
            dieno_header_div.id = 'dieno-header-container';
            document.getElementById('searchContainer').appendChild(dieno_header_div);   

    //Create title for the form
    let new_dieSearch_header = document.createElement('h3');
    let dieSearchHeaderClass = 'formHeader';
    new_dieSearch_header.className = dieSearchHeaderClass;
    document.getElementById('dieno-header-container').appendChild(new_dieSearch_header);

    //Populate and append the form title. 
    dieSearchHeaderString = 'Enter Die Number: '; 
    new_dieSearch_header.appendChild(document.createTextNode(dieSearchHeaderString));
    // Create line break
    //let br = document.createElement('br');
    document.getElementById('searchContainer').appendChild(br.cloneNode());

        //Create a container for the form elements
        let die_feild_div = document.createElement('div');
        let die_feild_class ='feild_div';
        die_feild_div.className = die_feild_class;
        die_feild_div.id = 'die_feild_div';
        document.getElementById('searchContainer').appendChild(die_feild_div); 

            // Create value field for selected option
            let dieSearchValueInput = document.createElement('input');
            dieSearchValueInput.setAttribute('type', 'text');
            dieSearchValueInput.setAttribute('name', 'input');
            dieSearchValueInput.setAttribute('placeholder', 'Die Number');
            dieSearchValueInput.id = 'dieNoSearchInput';

            document.getElementById('die_feild_div').appendChild(dieSearchValueInput);

            // Create a button and an event listner that passes the values contained in the form to function that updates the correct dictionary. 
            document.getElementById('searchContainer').appendChild(br.cloneNode());
            let dieSearchActionButton = document.createElement('button');
            dieSearchActionButton.appendChild(document.createTextNode('Submit'));
            dieSearchActionButton.addEventListener('click', function() {insertSearchedDieElements(document.getElementById('dieNoSearchInput').value)});
            document.getElementById('die_feild_div').appendChild(dieSearchActionButton);

    let list_header_div = document.createElement('div');
    let list_header_class ='search-header-container';
    list_header_div.className = list_header_class;
    list_header_div.id = 'list-header-container';
    document.getElementById('searchContainer').appendChild(list_header_div); 

    //Create title for the form
    let new_list_dieSearch_header = document.createElement('h3');
    let listSearchHeaderClass = 'formHeader';
    new_list_dieSearch_header.className = listSearchHeaderClass;
    document.getElementById('list-header-container').appendChild(new_list_dieSearch_header);

    //Populate and append the form title. 
    listSearchHeaderString = 'Select Department and component to see process to-do list: '; 
    new_list_dieSearch_header.appendChild(document.createTextNode(listSearchHeaderString));
    // Create line break
    //let br = document.createElement('br');
    document.getElementById('searchContainer').appendChild(br.cloneNode());

        //Create a container for the form elements
        let list_feild_div = document.createElement('div');
        let list_feild_class ='feild_div';
        list_feild_div.className = list_feild_class;
        list_feild_div.id = 'list_feild_div';
        document.getElementById('searchContainer').appendChild(list_feild_div); 

            var departmentList = ['Turning', 'Soft Machine', 'Hard Machine', 'Ramspark', 'Wirespark', 'Finishing']

            var selectList = document.createElement("select");
            selectList.id = "deptSelect";
            document.getElementById('list_feild_div').appendChild(selectList);

            for (var i = 0; i < departmentList.length; i++) {
                var option = document.createElement("option");
                option.value = departmentList[i];
                option.text = departmentList[i];
                selectList.appendChild(option);
            }

            //Populate and append the form title. 
            //listSearchHeaderString = 'Select Component: '; 
            //new_list_dieSearch_header.appendChild(document.createTextNode(listSearchHeaderString));
            // Create line break
            //let br = document.createElement('br');
            document.getElementById('list_feild_div').appendChild(br.cloneNode());

            var componentList = ['Lip', 'Mandrel', 'Dieplate', 'Backer', 'Bolster']

            var selectList = document.createElement("select");
            selectList.id = "componentSelect";
            document.getElementById('list_feild_div').appendChild(selectList);

            for (var i = 0; i < componentList.length; i++) {
                var option = document.createElement("option");
                option.value = componentList[i];
                option.text = componentList[i];
                selectList.appendChild(option);
            }

            // Create a button and an event listner that passes the values contained in the form to function that updates the correct dictionary. 
            document.getElementById('searchContainer').appendChild(br.cloneNode());
            let listSearchActionButton = document.createElement('button');
            listSearchActionButton.appendChild(document.createTextNode('Submit'));
            listSearchActionButton.addEventListener('click', function() {insertDeptToDoElements(document.getElementById('deptSelect').value, document.getElementById('componentSelect').value)});
            document.getElementById('list_feild_div').appendChild(listSearchActionButton);

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
    if (event.target == modal) {
    const el = document.getElementById('searchContainer');
    while(el.firstChild) el.removeChild(el.firstChild);
        modal.style.display = "none";
    }
    } 
}

function addSortModalListner() {
    const sortModalId = document.getElementById("column-sort-button");
    sortModalId.addEventListener('click', sortModal);
}

function sortModal() {
    // Get the modal
    var modal = document.getElementById("sort-modal");

    // open the modal
    modal.style.display = "block";

    // Create container for form
    let new_div = document.createElement('div');
    let newClass ='sort-container';
    new_div.className = newClass;
    new_div.id = 'sortContainer';
    document.getElementById('sort-modal-content').appendChild(new_div);

    //Create a container for the form section header
    let sort_header_div = document.createElement('div');
    let sort_header_class ='sort-header-container';
    sort_header_div.className = sort_header_class;
    sort_header_div.id = 'sort-header-container';
    document.getElementById('sortContainer').appendChild(sort_header_div);   

    //Create title for the form
    let new_header = document.createElement('h3');
    let headerClass = 'formHeader';
    new_header.className = headerClass;
    document.getElementById('sort-header-container').appendChild(new_header);

    //Populate and append the form title. 
    headerString = 'Sort jobs: '; 
    new_header.appendChild(document.createTextNode(headerString));
    // Create line break
    let br = document.createElement('br');
    document.getElementById('sortContainer').appendChild(br.cloneNode());

    //Create a container for the form elements
    let list_feild_div = document.createElement('div');
    let list_feild_class ='feild_div';
    list_feild_div.className = list_feild_class;
    list_feild_div.id = 'list_feild_div';
    document.getElementById('sortContainer').appendChild(list_feild_div); 

    var valueList = ['Work Order', 'Die Number', 'Customer', 'Order Number', 'Start Date', 'End Date', 'On Time']

    var selectList = document.createElement("select");
    selectList.id = "componentSelect";
    document.getElementById('list_feild_div').appendChild(selectList);

    for (var i = 0; i < valueList.length; i++) {
        var option = document.createElement("option");
        option.value = valueList[i];
        option.text = valueList[i];
        selectList.appendChild(option);
    }

    document.getElementById('sortContainer').appendChild(br.cloneNode());
    let listSearchActionButton = document.createElement('button');
    listSearchActionButton.appendChild(document.createTextNode('Submit'));
    listSearchActionButton.addEventListener('click', function() {insertDeptToDoElements(document.getElementById('deptSelect').value, document.getElementById('componentSelect').value)});
    document.getElementById('list_feild_div').appendChild(listSearchActionButton);

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
    if (event.target == modal) {
        const el = document.getElementById('sortContainer');
        while(el.firstChild) el.removeChild(el.firstChild);
        modal.style.display = "none";
    }
    } 
}

function createJobTable(anId) {
    anId = anId.replace("openButton", "");
    removeElementsFromDefined('inner-content-container');

    const tableTitleContainer = document.createElement("div");
    tableTitleContainer.id = 'tableTitleContainer';
    tableTitleContainer.className = 'tableTitleContainer';
    document.getElementById("inner-content-container").appendChild(tableTitleContainer);  

    //Create title for the form
    let new_header = document.createElement('h3');
    let headerClass = 'formHeader';
    new_header.className = headerClass;
    document.getElementById('tableTitleContainer').appendChild(new_header);

    //Populate and append the form title. 
    headerString = anId; 
    new_header.appendChild(document.createTextNode(headerString));
    // Create line break
    let br = document.createElement('br');
    document.getElementById('tableTitleContainer').appendChild(br.cloneNode());

    // tempDisplay.innerHTML = anId;
}

getDatabase();

/// ------------------------------------
/// Pause operation to allow Dictionaries
/// to be populated before the application
/// tries to render list of elements. 
/// ------------------------------------
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  
  async function demo() {
    // console.log('Taking a break...');
    await sleep(500);
    // console.log('Two seconds later, showing sleep in a loop...');
  
    // Sleep in loop
    for (let i = 0; i < 2; i++) {
      if (i === 3)
        await sleep(500);
    //   console.log(i);
    }
    insertOngoingElements();
}
demo();

insertJobElements();
addExpandListeners();
addOpenListeners();
addSearchModalListner()
addSortModalListner();