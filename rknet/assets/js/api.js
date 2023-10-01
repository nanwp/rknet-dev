$.ajax(
    {
        url:"https://ap-southeast-1.aws.data.mongodb-api.com/app/rk-net-wjgwl/endpoint/tentang_kami",
        type: "GET",
        beforSend: ()=> {

        },
        success: (res) => {
            $('#about #deskripsi').append('<p>&emsp;'+res.tentang+'</p>')
            // console.log(res.tentang)
        },
        error: (err) => {
            console.log(err)
        }

    }
);

$.ajax(
    {
        url: 'https://ap-southeast-1.aws.data.mongodb-api.com/app/rk-net-wjgwl/endpoint/layanan',
        type: 'GET',

        beforSend: ()=> {

        },
        success: (res) => {
            $.each(res, (index, data)=>{
                $('#services .container .row').append(
                    
                        '<div class="col-xl-3 col-md-6 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="100">'+
                            '<div class="icon-box">'+
                            '<h4><a href="">'+data.title+'</a></h4>'+
                            '<img src="'+data.image+'" class="img-fluid" alt="">'+
                            '<p>'+data.description+'</p>'+
                            '</div>'+
                        '</div>'
                    
                )
            })
        },
        error: (err) => {
            console.log(err)
        }


    }
);

$.ajax(
    {
        url: 'https://ap-southeast-1.aws.data.mongodb-api.com/app/rk-net-wjgwl/endpoint/produk',
        type: 'GET',

        beforSend: ()=> {

        },
        success: (res) => {
            $.each(res, (index, data)=>{
                $('#pricing .row').append(
                    '<div class="col-lg-3 col-md-6" data-aos="zoom-in" data-aos-delay="100">'+
                        '<div class="box">'+
                        '<h3 style="color: #07d5c0;">'+data.title+'</h3>'+
                        '<h3>'+data.bandwidth+'</h3>'+
                            '<div class="price"><sup>Rp.</sup>'+data.harga+'<span> / Bulan</span></div>'+
                            '<ul>'+
                                '<li>'+data.deskripsi+'</li>'+
                            '</ul>'+
                            '<a target="_blank" rel="noopener noreferrer" href="https://wa.me/08999904688/" class="btn-buy">Buy Now</a>'+
                        '</div>'+
                    '</div>'
                )
            })
        },
        error: (err) => {
            console.log(err)
        }
    }
)

$.ajax(
    {
        url: 'https://ap-southeast-1.aws.data.mongodb-api.com/app/rk-net-wjgwl/endpoint/client',
        type: 'GET',
        beforSend: ()=> {

        },
        success: (res) => {
            $.each(res, (index, data)=>{
                $('#client .row').append(
                    '<div class="col-lg-6 mt-4 mt-lg-0" data-aos="zoom-in" data-aos-delay="200">'+
                        '<div class="member d-flex align-items-start">'+
                            '<div class="pic"><img src="assets/img/icon.png" class="img-fluid" alt=""></div>'+
                                '<div class="member-info">'+
                                    '<h4>'+data.nama+'</h4>'+
                                    '<span>'+data.lokasi+'</span>'+
                                    '<p>'+data.deskripsi+'</p>'+
                                '<div class="social">'+
                                '</div>'+
                            '</div>'+
                        '</div>'+
                    '</div>'
                )
            })
        },
        error: (err) => {
            console.log(err)
        }
    }
)