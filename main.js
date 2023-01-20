let lead=[];
let ulEl=document.getElementById('list');
let d=document.getElementById('delete');
let tap=document.getElementById('tap');

tap.addEventListener('click',function(){ 
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        lead.push(tabs[0].url)
        localStorage.setItem("myleads", JSON.stringify(lead));
        render(lead);
 });

})
let leadsFromLocalStorage = JSON.parse(localStorage.getItem("myleads"));
if (leadsFromLocalStorage) {
    lead = leadsFromLocalStorage;
    render(lead);
}

function render(arr)
{
let item = "";
for (let i = 0; i < arr.length; i++) {
   //item += "<li><a target='_blank' href='" + lead[i] + "'>" + lead[i] + "</a></li>";
   //temp string
   item +=`<li>
                <a target='_blank' href='${arr[i]}'>
                    ${arr[i]}
                </a>
            </li>
    `
}
ulEl.innerHTML = item 
}
d.addEventListener("dblclick", function() {
    localStorage.clear();
    lead=[];
   render(lead);
})
    document.getElementById('savebutton').addEventListener("click" , function() {
        lead.push(document.getElementById('input1').value);
        localStorage.setItem("myleads",JSON.stringify(lead));
        document.getElementById('input1').value="";
        render(lead);
    })

