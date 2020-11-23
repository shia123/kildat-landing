$(document).ready(function () {
    $(window).bind("pageshow", function () {
        var form = $('#regis-sign-up-form');

        form[0].reset();
    });

    $("#status-regis-blogo").hide();
    $("#status-regis-front").hide();
    $("#status-regis-back").hide();
    $("#status-regis-permit").hide();
    $("#status-regis-store-front").hide();

    var returnRegisLogo;
    function callbackRegisLogo(response) {
        returnRegisLogo = response;

    }
    var returnRegisPermit;
    function callbackRegisPermit(response) {
        returnRegisPermit = response;

    }
    var returnRegisOwnerFront;
    function callbackRegisOwnerFront(response) {
        returnRegisOwnerFront = response;

    }
    var returnRegisOwnerBack;
    function callbackRegisOwnerBack(response) {
        returnRegisOwnerBack = response;

    }
    var returnRegisStoreFront;
    function callbackRegisStoreFront(response) {
        returnRegisStoreFront = response;

    }

    var serverRegisLogo = (function (file) {

        var formData = new FormData();
        formData.append('file', file);

        console.log(formData.get('file'))



        $.ajax({
            type: "POST",
            url: "https://staging-api.kidlat.com.ph/rider/merchant/images/upload-single",
            enctype: 'multipart/form-data',
            data: formData,
            processData: false,
            contentType: false,
            success: function (res) {
                callbackRegisLogo(res.data.image)
                $("#status-regis-blogo").html('SUCCESSFULLY UPLOADED!!');


            },
            xhr: function () {
                var xhr = new window.XMLHttpRequest();
                xhr.upload.addEventListener("progress", function (evt) {
                    if (evt.lengthComputable) {
                        var percentComplete = evt.loaded / evt.total;
                        console.log(percentComplete);
                        $('status-regis-blogo').html('<b> Uploading -> ' + '.....' + ' </b>');
                    }
                }, false);
                return xhr;
            },
            
             error: function (error) {
                $("#status-regis-blogo").hide()
                alert('Error on Uploading Please Check your Internet Connection and Try again')
                $(".regisblogo").val('');
            }

        })


    });

    var serverRegisPermit = (function (file) {

        var formData = new FormData();
        formData.append('file', file);

        console.log(formData.get('file'))


        $.ajax({
            type: "POST",
            url: "https://staging-api.kidlat.com.ph/rider/merchant/images/upload-single",
            enctype: 'multipart/form-data',
            data: formData,
            processData: false,
            contentType: false,
            success: function (res) {
                callbackRegisPermit(res.data.image)
                $("#status-regis-permit").html('SUCCESSFULLY UPLOADED!!');


            },
            xhr: function () {
                var xhr = new window.XMLHttpRequest();
                xhr.upload.addEventListener("progress", function (evt) {
                    if (evt.lengthComputable) {
                        var percentComplete = evt.loaded / evt.total;
                        console.log(percentComplete);
                        $('status-regis-permit').html('<b> Uploading -> ' + '.....' + ' </b>');
                    }
                }, false);
                return xhr;
            },
            
             error: function (error) {
                $("#status-regis-permit").hide()
                alert('Error on Uploading Please Check your Internet Connection and Try again')
                $(".regisbir").val('');
            }
        })


    });
    var serverRegisOwnerFront = (function (file) {

        var formData = new FormData();
        formData.append('file', file);

        console.log(formData.get('file'))


        $.ajax({
            type: "POST",
            url: "https://staging-api.kidlat.com.ph/rider/merchant/images/upload-single",
            enctype: 'multipart/form-data',
            data: formData,
            processData: false,
            contentType: false,
            success: function (res) {
                callbackRegisOwnerFront(res.data.image)
                $("#status-regis-front").html('SUCCESSFULLY UPLOADED!!');


            },
            xhr: function () {
                var xhr = new window.XMLHttpRequest();
                xhr.upload.addEventListener("progress", function (evt) {
                    if (evt.lengthComputable) {
                        var percentComplete = evt.loaded / evt.total;
                        console.log(percentComplete);
                        $('status-regis-front').html('<b> Uploading -> ' + '.....' + ' </b>');
                    }
                }, false);
                return xhr;
            },
            
             error: function (error) {
                $("#status-regis-front").hide()
                alert('Error on Uploading Please Check your Internet Connection and Try again')
                $(".regisfront").val('');
            }
        })


    });
    var serverRegisOwnerBack = (function (file) {

        var formData = new FormData();
        formData.append('file', file);

        console.log(formData.get('file'))


        $.ajax({
            type: "POST",
            url: "https://staging-api.kidlat.com.ph/rider/merchant/images/upload-single",
            enctype: 'multipart/form-data',
            data: formData,
            processData: false,
            contentType: false,
            success: function (res) {
                callbackRegisOwnerBack(res.data.image)
                $("#status-regis-back").html('SUCCESSFULLY UPLOADED!!');


            },
            xhr: function () {
                var xhr = new window.XMLHttpRequest();
                xhr.upload.addEventListener("progress", function (evt) {
                    if (evt.lengthComputable) {
                        var percentComplete = evt.loaded / evt.total;
                        console.log(percentComplete);
                        $('status-regis-back').html('<b> Uploading -> ' + '.....' + ' </b>');
                    }
                }, false);
                return xhr;
            },
            
             error: function (error) {
                $("#status-regis-back").hide()
                alert('Error on Uploading Please Check your Internet Connection and Try again')
                $(".regisback").val('');
            }
        })


    });
    var serverRegisStoreFront = (function (file) {

        var formData = new FormData();
        formData.append('file', file);

        console.log(formData.get('file'))


        $.ajax({
            type: "POST",
            url: "https://staging-api.kidlat.com.ph/rider/merchant/images/upload-single",
            enctype: 'multipart/form-data',
            data: formData,
            processData: false,
            contentType: false,
            success: function (res) {
                callbackRegisStoreFront(res.data.image)
                $("#status-regis-store-front").html('SUCCESSFULLY UPLOADED!!');


            },
            xhr: function () {
                var xhr = new window.XMLHttpRequest();
                xhr.upload.addEventListener("progress", function (evt) {
                    if (evt.lengthComputable) {
                        var percentComplete = evt.loaded / evt.total;
                        console.log(percentComplete);
                        $('status-regis-store-front').html('<b> Uploading -> ' + '.....' + ' </b>');
                    }
                }, false);
                return xhr;
            },
            
             error: function (error) {
                $("#status-regis-store-front").hide()
                alert('Error on Uploading Please Check your Internet Connection and Try again')
                $(".regisstorefront").val('');
            }
        })


    });

    $(".regisfront").change(function () {
        var file = this.files[0];
        $("#status-regis-front").show()
        console.log(file)
        if (!$(".regisfront").val()) {
            console.log("field is Empty")
            $(".regisfront").val('');
            $("#status-regis-front").hide();
           
        }
        else {
            if (file.type == "image/png" || file.type == "image/jpg" || file.type == "image/jpeg") {
                if (file.size <= 10000000) {
                    console.log("image is valid")
                    serverRegisOwnerFront(file);
                }
                else {
                    alert("Only Accept 10mb below")
                    $(".regisfront").val('');
                    $("#status-regis-front").hide();
                    
                }
            }
            else {
                alert("Invalid File Format, must be images with extension of PNG,JPEG or JPG")
                $(".regisfront").val('');
                $("#status-regis-front").hide();
             
            }
        }

        //  serverFileFirst(file);
    });
    $(".regisblogo").change(function () {
        var file = this.files[0];
        $("#status-regis-blogo").show()
        console.log(file)
        if (!$(".regisblogo").val()) {
            console.log("field is Empty")
            $(".regisblogo").val('');
            $("#status-regis-blogo").hide();
           
        }
        else {
            if (file.type == "image/png" || file.type == "image/jpg" || file.type == "image/jpeg") {
                if (file.size <= 10000000) {
                    console.log("image is valid")
                    serverRegisLogo(file);
                }
                else {
                    alert("Only Accept 10mb below")
                    $(".regisblogo").val('');
                    $("#status-regis-blogo").hide();
             
                }
            }
            else {
                alert("Invalid File Format, must be images with extension of PNG,JPEG or JPG")
                $(".regisblogo").val('');
                $("#status-regis-blogo").hide();
               
            }
        }

    });
    $(".regisbir").change(function () {
        var file = this.files[0];
        $("#status-regis-permit").show()
        console.log(file)
        if (!$(".regisbir").val()) {
            console.log("field is Empty")
            $(".regisbir").val('');
            $("#status-regis-permit").hide();
            
        }
        else {
            if (file.type == "image/png" || file.type == "image/jpg" || file.type == "image/jpeg") {
                if (file.size <= 10000000) {
                    console.log("image is valid")
                    serverRegisPermit(file);
                }
                else {
                    alert("Only Accept 10mb below")
                    $(".regisbir").val('');
            
                    $("#status-regis-permit").hide();
                   
                }
            }
            else {
                alert("Invalid File Format, must be images with extension of PNG,JPEG or JPG")
                $(".regisbir").val('');
           
                $("#status-regis-permit").hide();
               
            }
        }

    });
    $(".regisback").change(function () {
        var file = this.files[0];
        $("#status-regis-back").show()
        console.log(file)
        if (!$(".regisback").val()) {
            console.log("field is Empty")
            $(".regisback").val('');

            $("#status-regis-back").hide();
   
        }
        else {
            if (file.type == "image/png" || file.type == "image/jpg" || file.type == "image/jpeg") {
                if (file.size <= 10000000) {
                    console.log("image is valid")
                    serverRegisOwnerBack(file);
                }
                else {
                    alert("Only Accept 10mb below")
                    $(".regisback").val('');
         
                    $("#status-regis-back").hide();
                   
                }
            }
            else {
                alert("Invalid File Format, must be images with extension of PNG,JPEG or JPG")
                $(".regisback").val('');
           
                $("#status-regis-back").hide();
             
            }
        }

    });
    $(".regisstorefront").change(function () {
        var file = this.files[0];
        $("#status-regis-store-front").show()
        console.log(file)
        if (!$(".regisstorefront").val()) {
            console.log("field is Empty")
            $(".regisstorefront").val('');
     
            $("#status-regis-store-front").hide();
        }
        else {
            if (file.type == "image/png" || file.type == "image/jpg" || file.type == "image/jpeg") {
                if (file.size <= 10000000) {
                    console.log("image is valid")
                    serverRegisStoreFront(file);
                }
                else {
                    alert("Only Accept 10mb below")
                    $(".regisstorefront").val('');
                    $("#status-regis-store-front").hide();
                }
            }
            else {
                alert("Invalid File Format, must be images with extension of PNG,JPEG or JPG")
                $(".regisstorefront").val('');
                $("#status-regis-store-front").hide();
            }
        }

    });

    $("form[name='regis-sign-up-form']").validate({
        rules: {
            regisfirstname: "required",
            regislastname: "required",
            regisbname: "required",
            regisblogo: "required",
            regisphone: "required",
            regisaddress: "required",
            regisback: "required",
            regisfront: "required",
            regisstorefront: "required",
            regisbir: "required",
            regisitems: "required",
            regisagree: "required",
            regisemail: {
                required: true,
                email: true,
            }
        },
        // Specify validation error messages
        messages: {
            regisfirstname: "This field is required",
            regislastname: "This field is required",
            regisblogo: "This field is required",
            regisbname: "This field is required",
            regisphone: "This field is required",
            regisaddress: "This field is required",
            regisback: "This field is required",
            regisfront: "This field is required",
            regisstorefront: "This field is required",
            regisbir: "This field is required",
            regisagree: "Please Check this field for Terms and Policies ",
            regisemail: "Please enter a valid email address",
        },
        submitHandler: function (form) {
            if(returnRegisLogo==""){
                alert("Error on uploading Brand Logo Try Again")
              }
              else if(returnRegisOwnerBack==""){
                alert("Error on uploading Owner Back Image, Try Again")
              }
             else if(returnRegisOwnerFront==""){
                alert("Error on uploading Owner Front Image,, Try Again")
              }
              else if(returnRegisStoreFront==""){
                alert("Error on uploading Store Front Image, Try Again")
              }
              else if(returnRegisPermit==""){
                alert("Error on uploading Business Permit, Try Again")
              }
              else if (form.regisselect.value == 0) {
                alert("Please Select Merchant Type")
            }

    
              else{
                
                
    
              fetch('https://staging-api.kidlat.com.ph/rider/merchant/register', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                  user: {
                    firstName: form.regisfirstname.value,
                    lastName: form.regislastname.value,
                    businessName: form.regisbname.value,
                    email: form.regisemail.value,
                    address: form.regisaddress.value,
                    mobile: form.regisphone.value,
                    brandLogo: returnRegisLogo,
                    permit: returnRegisPermit,
                    idFront: returnRegisOwnerFront,
                    idBack: returnRegisOwnerBack,
                    storeFront: returnRegisStoreFront,
                    businessType:1,
                    regisAgree: form.regisagree.value,
                    status:'pending',
                    merchantType: form.regisselect.value
                  },
                })
              }).then((res) => {
                if (res.ok) {
                  $("#regis-signup-alert").append(
                    "<div class='alert alert-success alert-dismissible'><a href='merchant.html' class='close' data-dismiss='alert' aria-label='close'>&times;</a>Merchant Registration successful! Our Sales & Marketing Team  will Contact you as soon as possible. Thank you for Signing up as a Partner Merchant!</div>"
                  );
    
                  $("form[name='regis-sign-up-form']").each(function () {
                    this.reset();
    
                  });
                  $("#status-regis-blogo").hide();
                  $("#status-regis-front").hide();
                  $("#status-regis-back").hide();
                  $("#status-regis-permit").hide();
                  $("#status-regis-store-front").hide();
                  return res.json();
    
                } else if (res.status === 400) {
                  alert("Please try again");
                  return Promise.reject('error 400');
    
                } else {
                  return Promise.reject('some other error: ' + res.status);
    
                }
              })
                .catch(err => console.log(err));
              }
    
        },
    });
})