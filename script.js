<script>
    let x=[];
function additem(){
  const product=document.getElementById('product').value;
  const quantity=parseInt(document.getElementById('quantity').value);
  const price=parseFloat(document.getElementById('price').value);
  if(product && quantity && price){
    const total=quantity * price;
    const item={product,quantity,price,total};
    x.push(item); 
    displaybill();
    calculateTotalamount();
    document.getElementById('product').value='';
     document.getElementById('quantity').value='';
     document.getElementById('price').value='';

  }
}
function displaybill(){
  const billbody=document.getElementById('billbody');
  billbody.innerHTML='';
  for(let i=0;i<x.length;i++){
    const row=document.createElement('tr');
    const item=x[i];
    const productcell=document.createElement('td');
    productcell.textContent=item.product;
    row.appendChild(productcell);
    const quantitycell=document.createElement('td');
    quantitycell.textContent=item.quantity;
    row.appendChild(quantitycell);
    const pricecell=document.createElement('td');
    pricecell.textContent=item.price.toFixed(2);
    row.appendChild(pricecell);
    const totalcell=document.createElement('td');
    totalcell.textContent=item.total.toFixed(2);
    row.appendChild(totalcell);
    billbody.appendChild(row);
  }
  
}
function calculateTotalamount(){
  let s=0;
  for(let i=0;i<x.length;i++){

    s+=x[i].total;
  }
  document.getElementById('totalamount').textContent=s.toFixed(2);
}
</script>
  
