// let cvb=setTimeout(fun ,10);
// function fun()
// {
//  document.getElementsByTagName("html")[0].innerHTML =`<body style="background-color:rgb(56, 68, 69); display: flex ; justify-content: center; align-items: center; ">
//  <img src="https://i.pinimg.com/originals/c7/56/a6/c756a6d669545e4079b4bb883dada29d.gif" alt="" width="50px" height="50px" >
// </body>`;

// }

// name_of_city.style.display="none";
let btt=0;
let hjk=document.getElementsByClassName("hide");
  hjk[0].style.display="none";
  hjk[1].style.display="none";
  hjk[2].style.display="none";
function make_vis()
{
  let hjk=document.getElementsByClassName("hide");
  hjk[0].style.display="block";
  hjk[1].style.display="block";
  hjk[2].style.display="block";
  btn45.style.display="none";
}


let city_names = new Array;
let n_value;
let cnt = 0;

let coordinates = new Array;
function reset() {
  window.location.reload();
}
function getN() {
  alrt.innerHTML = "";
  // name_of_city.style.display="block"; 
  let idx=e4.options[e4.selectedIndex].value ;
 
  if(idx==1){
    e1.options[e1.selectedIndex].value = "drive";
     e2.options[e2.selectedIndex].value = 2;
     e3.options[e3.selectedIndex].value = 1;
  }
  if(idx==2){
    e1.options[e1.selectedIndex].value = "truck";
    e2.options[e2.selectedIndex].value = 1;
    e3.options[e3.selectedIndex].value = 2;
 }
 if(idx==3){
  e1.options[e1.selectedIndex].value = "walk";
  e2.options[e2.selectedIndex].value = 1;
  e3.options[e3.selectedIndex].value = 1;
}

if(idx==4){
  e1.options[e1.selectedIndex].value = "walk";
  e2.options[e2.selectedIndex].value = 1;
  e3.options[e3.selectedIndex].value = 1;
}
if(idx==5){
  e1.options[e1.selectedIndex].value = "drive";
  e2.options[e2.selectedIndex].value = 2;
  e3.options[e3.selectedIndex].value = 2;
}


  n_value = val_of_n.value;
  if (n_value == "" || n_value <= 0) {
    alrt.innerHTML = `
<div class="alert alert-secondary alert-dismissible fade show ok" role="alert">
 Enter valid "Number of cities". 
<button type="button" class="btn-close ref_but" data-bs-dismiss="alert" aria-label="Close"></button>
</div>`;

    // name_of_city.style.display="none";  make textfield disapear make alert dispear
  }

  console.log(n_value);
  if (e3.options[e3.selectedIndex].value == 0) {
    alrt.innerHTML = `
  <div class="alert alert-warning alert-dismissible fade show ok" role="alert">
   Please select "Type of trip"  option OR "Select type of your trip" option.
  <button type="button" class="btn-close ref_but" data-bs-dismiss="alert" aria-label="Close"></button>
</div>`;
  }

  if (e2.options[e2.selectedIndex].value == 0) {
    alrt.innerHTML = `
  <div class="alert alert-success alert-dismissible fade show ok" role="alert">
   Please select valid "Optimize by" option  OR "select type of your trip" option.
  <button type="button" class="btn-close ref_but" data-bs-dismiss="alert" aria-label="Close"></button>
</div>`;
  }

  if (e1.options[e1.selectedIndex].value == 0) {
    alrt.innerHTML = `
  <div class="alert alert-info alert-dismissible fade show ok" role="alert">
   Please select valid "Mode"   OR "select type of your trip" option.
  <button type="button" class="btn-close ref_but" data-bs-dismiss="alert" aria-label="Close"></button>
</div>`;

  }

}

function getCityNames() {
  if (n_value == undefined || n_value <= 0 || n_value > 18) {
    alrt.innerHTML = `
  <div class="alert alert-dark alert-dismissible fade show ok" role="alert">
   Please enter number of cities before entering cities names. If already done, please click on submit button.
  <button type="button" class="btn-close ref_but" data-bs-dismiss="alert" aria-label="Close"></button>
</div>`;
    return;
  }
  if (textfield1.value == "") return;
  console.log(textfield1.value);
  city_names.push(textfield1.value);
  (textfield1).value = "";
  if(cnt==0 && e3.options[e3.selectedIndex].value == 1 && n_value!=1) {document.getElementById("edit").innerHTML="Enter all other cities";alert("Now , You can enter names of all other cities in any order and we will arrange them in best possible order for your choices.");}
  if(cnt==0 && e3.options[e3.selectedIndex].value == 2 && n_value!=1) {document.getElementById("edit").innerHTML="Enter city names here";alert("Now , Enter all other cities EXCEPT destination city");}
  if(cnt==n_value-2 && e3.options[e3.selectedIndex].value == 2 && n_value!=2) {document.getElementById("edit").innerHTML="Enter all other cities";alert("Now , Enter destination city name");}
  //   console.log(city_names);
  cnt++;
  if (cnt == n_value) {
//     setTimeout(25000,
//       ()=>{
//         alrt.innerHTML = `
//   <div class="alert alert-dark alert-dismissible fade show ok" role="alert">
//    An error occured . Please verify your input and try again.
//   <button type="button" class="btn-close ref_but" data-bs-dismiss="alert" aria-label="Close"></button>
// </div>`;
//       }
//       );
    // document.getElementById("autocomplete-container").style.display = "none";
    
    setTimeout(()=>
    {
      if(!bt){
      spin.innerHTML="";
      alrt.innerHTML = `
  <div class="alert alert-dark alert-dismissible fade show ok" role="alert">
  Something went wrong. Probably, some of the locations you entered are not valid. Try out again with valid locations.
  <button type="button" class="btn-close ref_but" data-bs-dismiss="alert" aria-label="Close"></button>
</div>`;}
    }, 35000) ; 
    
   spin.innerHTML=`<div class="spinner-border" role="status">
  <span class="visually-hidden">Loading...</span>
</div>`;
    document.getElementById("btn2").style.display = "none";
    // document.getElementById("btn1").style.display = "none";
    let b = createGraph();
    b.then(() => {
      let data = genData(coordinates);


      let mat;

      const requestOptions = {
        method: 'POST',
        body: JSON.stringify(data),
        headers: { "Content-Type": "application/json" }

      };
      async function ok() {

        const response = await fetch("https://api.geoapify.com/v1/routematrix?apiKey=b5ccc701212d45658ee3cc25830021f7", requestOptions);

        const result = await response.json();

        mat = result.sources_to_targets;
        return result;

      }
      let a = ok();
      a.then(() => {
        let n = mat.length;
        // console.log(n);

        let dist = new Array(n + 1);
        dist[0] = new Array(n + 1);
        for (let j = 0; j < n + 1; j++) {
          dist[0][j] = 0;
        }
        for (let i = 1; i < n + 1; i++) {
          dist[i] = new Array(n + 1);
          dist[i][0] = 0;
          for (let j = 1; j < n + 1; j++) {
            if (e2.options[e2.selectedIndex].value == 1) {
              if (mat[i - 1][j - 1] == null) {
                alrt.innerHTML = `
                          <div class=alert alert-warning alert-dismissible fade show ok" role="alert">
                          Unable to locate distnce between ${city_names[i - 1]} and ${city_names[j - 1]} . Please enter recognisable locations . Reload the page and try again .
                          <button type="button" class="btn-close ref_but" data-bs-dismiss="alert" aria-label="Close"></button>
                        </div>`;

              }
              else dist[i][j] = mat[i - 1][j - 1].time;
            }
            else if (e2.options[e2.selectedIndex].value == 2) { dist[i][j] = mat[i - 1][j - 1].distance; }

          }
        }
        console.log(dist);
        let MAX = 1.797693134862315E+308;
        let memo = new Array(n + 1);
        for (let i = 0; i < n + 1; i++) {
          memo[i] = new Array(1 << (n + 1));
          for (let j = 0; j < 1 << (n + 1); j++) {
            memo[i][j] = new Array(1);
            memo[i][j][0] = -1;
          }
        }

        function fun(i, mask)  // bug in this for n=2
        {
          if (mask == ((1 << i) | 3)) {
            let temp = [dist[1][i], 1, i];
            return temp;
          }

          if (memo[i][mask][0] != -1)
            return memo[i][mask];

          let ans = MAX;
          let path = new Array;

          for (let j = 1; j <= n; j++)
            if ((mask & (1 << j)) && j != i && j != 1) {
              let temp = fun(j, mask & (~(1 << i)));
              if (ans > temp[0] + dist[j][i]) {
                ans = temp[0] + dist[j][i];
                path = temp;
              }
            }


          memo[i][mask][0] = ans;
          for (let j = 1; j < path.length; j++) {

            memo[i][mask].push(path[j]);
          }

          memo[i][mask].push(i);
          return memo[i][mask];
        }

        let ans = MAX;
        let path = new Array;

        if (e3.options[e3.selectedIndex].value == 1) {
          for (let i = 2; i <= n; i++) {
            let temp = fun(i, (1 << (n + 1)) - 1);
            if (ans > temp[0] + dist[i][1]) {
              ans = temp[0] + dist[i][1];
              path = temp;

            }
          }
          path[0] = ans;

          path.push(1);
          // let content="The cost of most efficient tour = " + ans+" ";

          // let content = "Best possible route is :-";
          for (let i = 1; i < path.length - 1; i++)
            // {content += ((city_names[path[i] - 1]) + " => ");
            prt(city_names[path[i] - 1],1);
        
          // content += ((city_names[path[path.length - 1] - 1]));
          prt(city_names[path[path.length - 1] - 1],0);
          // output.innerHTML = `${content}`;
          empty.style.display="flex";
          spin.innerHTML="";
          bt=1;
          alrt.innerHTML = `
  <div class="alert alert-success alert-dismissible fade show ok" role="alert">
 Here is your route! Scroll down to see it. Click reset to try out again!
  <button type="button" class="btn-close ref_but" data-bs-dismiss="alert" aria-label="Close"></button>
</div>`;
        }
        else if (e3.options[e3.selectedIndex].value == 2) {

          if (n == 2) {
            path.push(dist[1][2]);
            path.push(1);
            path.push(2);
          }
          else {
            for (let i = 1; i < n; i++) {
              let temp = fun(i, (1 << (n)) - 1);
              if (ans > temp[0] + dist[i][n]) {
                ans = temp[0] + dist[i][n];
                path = temp;

              }
            }

            path[0] = ans;
            // console.log("The cost of most efficient tour = " + ans)
            path.push(n);
          }
          // let content="The cost of most efficient tour = " + ans+" ";
          // car.style.animation= "car 5s steps( path.length - 1)";

          // let content = "Best possible route is :-";
          for (let i = 1; i < path.length - 1; i++) 
           {
            // content += ((city_names[path[i] - 1]) + " => ");
            prt(city_names[path[i] - 1],1);
           }
            // content += ((city_names[path[path.length - 1] - 1]) );
            prt(city_names[path[path.length - 1] - 1],0);
            empty.style.display="flex";
            bt=1;
            spin.innerHTML="";
            alrt.innerHTML = `
            <div class="alert alert-success alert-dismissible fade show ok" role="alert">
            Here is your route!  Scroll down to see it. Click reset to try out again!
            <button type="button" class="btn-close ref_but" data-bs-dismiss="alert" aria-label="Close"></button>
          </div>`;
          // output.innerHTML = `${content}`;
          // setTimeout(3000,()=>
          // {
          //   alrt.innerHTML = `
          //   <div class="alert alert-warning alert-dismissible fade show" role="alert">
          //   Reset to try out again
          //   <button type="button" class="btn-close ref_but" data-bs-dismiss="alert" aria-label="Close"></button>
          // </div>`;
          // })

        }

      });

    })
  }
}


var requestOptions1 = {
  method: 'GET',
};
let api_key = "b5ccc701212d45658ee3cc25830021f7";

// console.log(city_names);        
// why "Hi"+city_names didnt worked?
async function createGraph() {

  for (let i = 0; i < city_names.length; i++) {
    const response = await fetch(`https://api.geoapify.com/v1/geocode/search?text=${city_names[i]}&apiKey=${api_key}`, requestOptions1)
    const result = await response.json();

    coordinates.push(result.features[0].geometry.coordinates);


  }

}

function genData(coordinates) {
  let no = coordinates.length;
  let sources = new Array(no);
  for (let i = 0; i < no; i++) {
    sources[i] = {
      "location": coordinates[i]
    }
  }

  let targets = new Array(no);
  for (let i = 0; i < no; i++) {
    targets[i] = {
      "location": coordinates[i]
    }
  }

  let data = {

    "mode": e1.options[e1.selectedIndex].value,
    "sources": sources,
    "targets": targets
  }

  console.log(data);
  return data;
}

function prt(name, bt)
{
  
  op.innerHTML+=
  `<img  src="https://th.bing.com/th/id/R.2ac0f20ea885ae7dee9eb63dad67810e?rik=Vprr9LaoeI1HOA&riu=http%3a%2f%2fwww.pngall.com%2fwp-content%2fuploads%2f2017%2f05%2fMap-Marker-PNG-Pic.png&ehk=eYK7gL69gFU2jFPvTKQZb4cmyWcorR7NNJUymNAFjxc%3d&risl=&pid=ImgRaw&r=0" alt="" width="16px" height="20px">`;
  
 naming.innerHTML+=`<h6>${name}</h6>`;
  // koo.style.padding="1px ";
  if(bt)
  {op.innerHTML+=`<img  src="https://ceoimage.com/wp-content/uploads/2015/09/2048x2048-white-solid-color-background.jpg" alt="" width="1px" height="45px">`;}
}
