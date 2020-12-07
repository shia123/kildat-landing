$(document).ready(function () {
    $(window).bind("pageshow", function () {
        var form = $('#unregis-sign-up-form');

        form[0].reset();
    });

    $("#status-unregis-blogo").hide();
    $("#status-unregis-front").hide();
    $("#status-unregis-back").hide();
    $("#status-unregis-store-front").hide();

    var returnUnregisLogo;
    function callbackUnregisLogo(response) {
        returnUnregisLogo = response;

    }
    var returnUnregisOwnerFront;
    function callbackUnregisOwnerFront(response) {
        returnUnregisOwnerFront = response;

    }
    var returnUnregisOwnerBack;
    function callbackUnregisOwnerBack(response) {
        returnUnregisOwnerBack = response;

    }
    var returnUnregisStoreFront;
    function callbackUnregisStoreFront(response) {
        returnUnregisStoreFront = response;

    }

    var serverUnregisLogo = (function (file) {

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
                callbackUnregisLogo(res.data.image)
                $("#status-unregis-blogo").html('SUCCESSFULLY UPLOADED!!');


            },
            xhr: function () {
                var xhr = new window.XMLHttpRequest();
                xhr.upload.addEventListener("progress", function (evt) {
                    if (evt.lengthComputable) {
                        var percentComplete = evt.loaded / evt.total;
                        console.log(percentComplete);
                        $('status-unregis-blogo').html('<b> Uploading -> ' + '.....' + ' </b>');
                    }
                }, false);
                return xhr;
            },

            error: function (error) {
                $("#status-unregis-blogo").hide()
                alert('Error on Uploading Please Check your Internet Connection and Try again')
                $(".unregisblogo").val('');
            }

        })


    });

    var serverUnregisPermit = (function (file) {

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
                callbackUnregisLogo(res.data.image)
                $("#status-unregis-permit").html('SUCCESSFULLY UPLOADED!!');


            },
            xhr: function () {
                var xhr = new window.XMLHttpRequest();
                xhr.upload.addEventListener("progress", function (evt) {
                    if (evt.lengthComputable) {
                        var percentComplete = evt.loaded / evt.total;
                        console.log(percentComplete);
                        $('status-unregis-permit').html('<b> Uploading -> ' + '.....' + ' </b>');
                    }
                }, false);
                return xhr;
            },

            error: function (error) {
                $("#status-unregis-permit").hide()
                alert('Error on Uploading Please Check your Internet Connection and Try again')
                $(".unregisbir").val('');
            }
        })


    });
    var serverUnregisOwnerFront = (function (file) {

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
                callbackUnregisOwnerFront(res.data.image)
                $("#status-unregis-front").html('SUCCESSFULLY UPLOADED!!');


            },
            xhr: function () {
                var xhr = new window.XMLHttpRequest();
                xhr.upload.addEventListener("progress", function (evt) {
                    if (evt.lengthComputable) {
                        var percentComplete = evt.loaded / evt.total;
                        console.log(percentComplete);
                        $('status-unregis-front').html('<b> Uploading -> ' + '.....' + ' </b>');
                    }
                }, false);
                return xhr;
            },

            error: function (error) {
                $("#status-unregis-front").hide()
                alert('Error on Uploading Please Check your Internet Connection and Try again')
                $(".unregisfront").val('');
            }
        })


    });
    var serverUnregisOwnerBack = (function (file) {

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
                callbackUnregisOwnerBack(res.data.image)
                $("#status-unregis-back").html('SUCCESSFULLY UPLOADED!!');


            },
            xhr: function () {
                var xhr = new window.XMLHttpRequest();
                xhr.upload.addEventListener("progress", function (evt) {
                    if (evt.lengthComputable) {
                        var percentComplete = evt.loaded / evt.total;
                        console.log(percentComplete);
                        $('status-unregis-back').html('<b> Uploading -> ' + '.....' + ' </b>');
                    }
                }, false);
                return xhr;
            },

            error: function (error) {
                $("#status-unregis-back").hide()
                alert('Error on Uploading Please Check your Internet Connection and Try again')
                $(".unregisback").val('');
            }
        })


    });
    var serverUnregisStoreFront = (function (file) {

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
                callbackUnregisStoreFront(res.data.image)
                $("#status-unregis-store-front").html('SUCCESSFULLY UPLOADED!!');


            },
            xhr: function () {
                var xhr = new window.XMLHttpRequest();
                xhr.upload.addEventListener("progress", function (evt) {
                    if (evt.lengthComputable) {
                        var percentComplete = evt.loaded / evt.total;
                        console.log(percentComplete);
                        $('status-unregis-store-front').html('<b> Uploading -> ' + '.....' + ' </b>');
                    }
                }, false);
                return xhr;
            },

            error: function (error) {
                $("#status-unregis-store-front").hide()
                alert('Error on Uploading Please Check your Internet Connection and Try again')
                $(".unregisstorefront").val('');
            }
        })


    });

    $(".unregisfront").change(function () {
        var file = this.files[0];
        $("#status-unregis-front").show()

        console.log(file)
        if (!$(".unregisfront").val()) {
            console.log("field is Empty")
            $(".unregisfront").val('');
            $("#status-unregis-front").hide();

        }
        else {
            if (file.type == "image/png" || file.type == "image/jpg" || file.type == "image/jpeg") {
                if (file.size <= 10000000) {
                    console.log("image is valid")
                    serverUnregisOwnerFront(file);
                }
                else {
                    alert("Only Accept 10mb below")
                    $(".unregisfront").val('');
                    $("#status-unregis-front").hide();

                }
            }
            else {
                alert("Invalid File Format, must be images with extension of PNG,JPEG or JPG")
                $(".unregisfront").val('');
                $("#status-unregis-front").hide();

            }
        }

        //  serverFileFirst(file);
    });
    $(".unregisblogo").change(function () {
        var file = this.files[0];
        $("#status-unregis-blogo").show()
        console.log(file)
        if (!$(".unregisblogo").val()) {
            console.log("field is Empty")
            $(".unregisblogo").val('');
            $("#status-unregis-blogo").hide();

        }
        else {
            if (file.type == "image/png" || file.type == "image/jpg" || file.type == "image/jpeg") {
                if (file.size <= 10000000) {
                    console.log("image is valid")
                    serverUnregisLogo(file);
                }
                else {
                    alert("Only Accept 10mb below")
                    $(".unregisblogo").val('');
                    $("#status-unregis-blogo").hide();

                }
            }
            else {
                alert("Invalid File Format, must be images with extension of PNG,JPEG or JPG")
                $(".unregisblogo").val('');
                $("#status-unregis-blogo").hide();

            }
        }

    });

    $(".unregisback").change(function () {
        var file = this.files[0];
        $("#status-unregis-back").show()

        console.log(file)
        if (!$(".unregisback").val()) {
            console.log("field is Empty")
            $(".unregisback").val('');
            $("#status-unregis-back").hide();
        }
        else {
            if (file.type == "image/png" || file.type == "image/jpg" || file.type == "image/jpeg") {
                if (file.size <= 10000000) {
                    console.log("image is valid")
                    serverUnregisOwnerBack(file);
                }
                else {
                    alert("Only Accept 10mb below")
                    $(".unregisback").val('');
                    $("#status-unregis-back").hide();

                }
            }
            else {
                alert("Invalid File Format, must be images with extension of PNG,JPEG or JPG")
                $(".unregisback").val('');
                $("#status-unregis-back").hide();

            }
        }

    });
    $(".unregisstorefront").change(function () {
        var file = this.files[0];
        $("#status-unregis-store-front").show()
        console.log(file)
        if (!$(".unregisstorefront").val()) {
            console.log("field is Empty")
            $(".unregisstorefront").val('');
            $("#status-unregis-store-front").hide();
        }
        else {
            if (file.type == "image/png" || file.type == "image/jpg" || file.type == "image/jpeg") {
                if (file.size <= 10000000) {
                    console.log("image is valid")
                    serverUnregisStoreFront(file);
                }
                else {
                    alert("Only Accept 10mb below")
                    $(".unregisstorefront").val('');
                    $("#status-unregis-store-front").hide();

                }
            }
            else {
                alert("Invalid File Format, must be images with extension of PNG,JPEG or JPG")
                $(".unregisstorefront").val('');
                $("#status-unregis-store-front").hide();
            }
        }

    });



    $("form[name='unregis-sign-up-form']").validate({
        rules: {

            unregisfirstname: "required",
            unregislastname: "required",
            unregisbname: "required",
            unregisstorefront: 'required',
            unregisphone: "required",
            unregisblogo: "required",
            unregisaddress: "required",
            unregisfront: "required",
            unregisback: "required",
            unregisitems: "required",
            unregisagree: "required",
            unregisemail: {
                required: true,
                email: true,
            }
        },
        // Specify validation error messages
        messages: {

            unregisfirstname: "This field is required",
            unregislastname: "This field is required",
            unregisbname: "This field is required",
            unregisstorefront: "This field is required",
            unregisphone: "This field is required",
            unregisfront: "This field is required",
            unregisback: "This field is required",
            unregisblogo: "This field is required",
            unregisaddress: "This field is required",
            unregisitems: "This field is required",
            unregisagree: "Please Check this field for Terms and Policies ",
            unregisemail: "Please enter a valid email address",
        },
        submitHandler: function (form) {


            console.log(form.unregisselect.value)
            if (returnUnregisLogo == "") {
                alert("Error on uploading Brand Logo Try Again")
            }
            else if (returnUnregisOwnerBack == "") {
                alert("Error on uploading Owner Back Image, Try Again")
            }
            else if (returnUnregisOwnerFront == "") {
                alert("Error on uploading Owner Front Image,, Try Again")
            }
            else if (returnUnregisStoreFront == "") {
                alert("Error on uploading Store Front Image, Try Again")
            }
            else if (form.unregisselect.value == 0) {
                alert("Please Select Merchant Type")
            }


            else {



                fetch('https://staging-api.kidlat.com.ph/rider/merchant/register', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        user: {
                            firstName: form.unregisfirstname.value,
                            lastName: form.unregislastname.value,
                            businessName: form.unregisbname.value,
                            email: form.unregisemail.value,
                            address: form.unregisaddress.value,
                            mobile: form.unregisphone.value,
                            brandLogo: returnUnregisLogo,
                            idFront: returnUnregisOwnerFront,
                            idBack: returnUnregisOwnerBack,
                            storeFront: returnUnregisStoreFront,
                            permit: "",
                            businessType: 0,
                            regisAgree: form.unregisagree.value,
                            status: 'pending',
                            merchantType: form.unregisselect.value
                        },
                    })
                }).then((res) => {
                    if (res.ok) {
                        $("#unregis-signup-alert").append(
                            "<div class='alert alert-success alert-dismissible'><a href='merchant.html' class='close' data-dismiss='alert' aria-label='close'>&times;</a>Merchant Registration successful! Our Sales & Marketing Team  will Contact you as soon as possible. Thank you for Signing up as a Partner Merchant</div>"
                        );

                        $("form[name='unregis-sign-up-form']").each(function () {
                            this.reset();

                        });
                        $("#status-unregis-blogo").hide();
                        $("#status-unregis-front").hide();
                        $("#status-unregis-back").hide();
                        $("#status-unregis-store-front").hide();
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