$('.apireq').click(function() {
    $.ajax({
        url: "http://127.0.0.1:8000/students_api/",
        dataType: "json",
        success: function(data) {
            $('#first_name').text(data[0].first_name);
            $('#last_name').text(data[0].last_name);
            $('#age').text(data[0].age);
            $('#gender').text(data[0].gender);
        }
    });
});