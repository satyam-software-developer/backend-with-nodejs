function deleteProduct(id) {
  const result = confirm("Are you sure you want to delete this product ?");
  if (result) {
    fetch("/delete-product/" + id, {
      method: "POST",
    }).then((res) => {
      if (res.ok) {
        location.reload();
        // window.location.href = "/";
    
      }
    });
  }
}


// function deleteProduct(id) {
//     var result = confirm("Are you sure you want to delete this product ?");
//     if (result) {
//       fetch("/delete-product/" + id, {
//         method: "POST",
//       }).then((res) => {
//         if (res.ok) {
//           location.reload();
//         }
//       }).catch(error => {
//         console.error('Error deleting product:', error);
//       });
//     }
//   }
  