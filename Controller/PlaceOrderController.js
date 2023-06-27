const data = "key";
const data1= "key2";
const data2= "key1";
loadData();
function loadData() {
    let pre_data = localStorage.getItem(data);
    console.log(pre_data);
    let customer_data_arr = JSON.parse(pre_data);
    console.log(customer_data_arr);
    let pre_data1 = localStorage.getItem(data2);
    console.log(pre_data1);
    let item_data_arr = JSON.parse(pre_data);
    console.log(item_data_arr);
    for (let i =0; i<item_data_arr.length; i++){
        console.log(item_data_arr[i].item_id);
    }
    let customer =[];
    for (let i =0; i<customer_data_arr.length; i++){
        var id = customer_data_arr[i].customer_id;
        customer[i] =id;
    }
    console.log(customer);
    let item =[];
    for (let i =0; i<item_data_arr.length; i++){
        var code = item_data_arr[i].item_desc;
        console.log(code);
        item[i] =code;
    }
    console.log(item);
    customer.forEach(function(cust){
        let o= document.createElement("option");
        console.log(cust);
        o.text=cust;
        o.value=cust;
         customerid.appendChild(o);
    });
    item.forEach(function(code){
        let o= document.createElement("option");
        console.log(code);
        o.text=code;
        o.value=code;
        itemid.appendChild(o);
    });
};
$('#btncart').on('click',(event) =>{

});
$('#customerid').on('click',(event) =>{
    var e = document.getElementById("customerid");
    var strUser = e.value; // 2
    console.log(strUser);
    let pre_data = localStorage.getItem(data);
    console.log(pre_data);
    let customer_data_arr = JSON.parse(pre_data);
    let index = customer_data_arr.findIndex(value => value.customer_id === strUser);
    if (index > -1){
        console.log(customer_data_arr[index]);
        customer_data_arr[index].customer_name = $("#name1").val();
    }
});