var fullName;
var regNo;
var course;
var gender, genders;
var address;
var mobile;
var students = [];

function save() {
    fullName = document.getElementById("name").value;
    console.log("fullname", fullName);
    regNo = document.getElementById("reg").value;
    console.log("regNo", regNo);
    course = document.getElementById("course").value;
    console.log("course", course);
    genders = document.getElementsByName("gender");
    console.log("gender", genders);
    address = document.getElementById("add").value;
    console.log("address", address);
    mobile = document.getElementById("mob").value;
    console.log("mobile", mobile);
    for (var i = 0; i < genders.length; i++) {
        if (genders[i].checked == true) {
            gender = genders[i].value;
            break;
        }
    }
    //fill all the values into object
    studentDetail = {
        "fullName": fullName
        , "regNo": regNo
        , "course": course
        , "gender": gender
        , "address": address
        , "mobile": mobile
    };
    console.log("object", studentDetail);
    //push object into array
    students.push(studentDetail);
    console.log("array", students);
    var studData = {
            "data": students
        }
        // store the data into localStorage
    var data = JSON.stringify(studData);
    localStorage.studData = data;
    console.log("data", data);
    clearAll();
    alert("Data Saved!!")
}

function clearAll() {
    document.getElementById("name").value = "";
    document.getElementById("reg").value = "";
    document.getElementById("course").value = "";
    document.getElementsByName("gender").value;
    document.getElementById("add").value = "";
    document.getElementById("mob").value = "";
    for (i = 0; i < genders.length; i++) {
        if (genders[i].value == gender) {
            genders[i].checked = false;
        }
    }
}

function clearData() {
    localStorage.clear();
    alert("Stored Data is deleted!!");
}

function read() {
    var reg_no = document.getElementById("reg").value;
    var allData = JSON.parse(localStorage.studData);
    students = allData.data;
    console.log("students", students);
    for (i = 0; i < students.length; i++) {
        if (students[i].regNo == reg_no) {
            fullName = students[i].fullName;
            console.log("name", fullName);
            course = students[i].course;
            gender = students[i].gender;
            console.log("gender", gender);
            address = students[i].address;
            mobile = students[i].mobile;
            break;
        }
    }
    document.getElementById("r_name").value = fullName;
    document.getElementById("r_course").value = course;
    genders = document.getElementsByName("r_gender");
    document.getElementById("r_add").value = address;
    document.getElementById("r_mob").value = mobile;
    genders = document.getElementsByName("r_gender");
    for (i = 0; i < genders.length; i++) {
        //        console.log()
        if (genders[i].value == gender) {
            genders[i].checked = true;
            break;
        }
    }
    alert("Read Data!!");
}

function update() {
    var reg_no = document.getElementById("reg").value;
    allData = JSON.parse(localStorage.studData);
    students = allData.data;
    console.log("students", students);
    for (i = 0; i < students.length; i++) {
        if (students[i].regNo == reg_no) {
            fullName = students[i].fullName;
            console.log("fullName", fullName);
            course = students[i].course;
            gender = students[i].gender;
            console.log("gender", gender);
            address = students[i].address;
            mobile = students[i].mobile;
        }
    }
    document.getElementById("u_name").value = fullName;
    document.getElementById("u_course").value = course;
    document.getElementsByName("u_gender").value = gender;
    document.getElementById("u_add").value = address;
    document.getElementById("u_mob").value = mobile;
    genders = document.getElementsByName("u_gender");
    for (i = 0; i < genders.length; i++) {
        if (genders[i].value == gender) {
            genders[i].checked = true;
            break;
        }
    }
}

function saveData() {
    allData = JSON.parse(localStorage.studData);
    students = allData.data;
    fullName = document.getElementById("u_name").value;
    regNo = document.getElementById("reg").value;
    course = document.getElementById("u_course").value;
    gender = document.getElementsByName("u_gender").value;
    console.log("gender", gender);
    address = document.getElementById("u_add").value;
    mobile = document.getElementById("u_mob").value;
    for (i = 0; i < students.length; i++) {
        if (students[i].regNo == regNo) {
            students[i].fullName = fullName;
            students[i].course = course;
            students[i].gender = gender;
            students[i].address = address;
            students[i].mobile = mobile;
        }
    }
    console.log("students", students);
    var studData = {
        "data": students
    }
    var data = JSON.stringify(studData);
    localStorage.studData = data;
    console.log("data", data);
    alert("Data updated!!");
}

function deleteData() {
    found = 0;
    var reg_no = document.getElementById("reg").value;
    allData = JSON.parse(localStorage.studData);
    students = allData.data;
    for (i = 0; i < students.length; i++) {
        if (students[i].regNo == reg_no) {
            students.splice(i, 1);
            found = 1;
            break;
        }
    }
    localStorage.studData = students;
    if (found == 1) {
        alert("Data deleted!!");
    }
    else {
        alert("Data not found!");
    }
}