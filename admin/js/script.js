/*global $*/

$(document).ready(function () {
    readRecords(); // calling function
});

function readRecords() {
    $.get("/orase/", {}, function (data, status) {
        data.forEach(function(value) {
            var row = '<tr id="row_id_'+ value.id +'">'
            			+ displayColumns(value)
        				+ '</tr>';
            $('#orase').append(row);
        });
    });
}


function displayColumns(value) {
    return 	'<td>'+value.id+'</td>'
            + '<td class="denumire">'+value.denumire+'</td>'
			+ '<td class="populatie">'+value.populatie+'</td>'
			+ '<td class="clima">'+value.clima+'</td>'
			+ '<td align="left">'
			+	'<button onclick="viewRecord('+ value.id +')" class="button2">Modifica inregistrare</button>'
			+ '</td>'
			+ '<td align="center">'
			+	'<button onclick="deleteRecord('+ value.id +')" class="button1">Sterge inregistrare</button>'
			+ '</td>';
}
function addRecord() {
    $('#id').val('');
    $('#denumire').val('');
    $('#populatie').val('');
    $('#clima').val('');
  
    $('#myModalLabel').html('Add New Town');
    $('#add_new_record_modal').modal('show');
}

function viewRecord(id) {
    var url = "/orase/" + id;
    
    $.get(url, {}, function (data, status) {
        //bind the values to the form fields
        $('#denumire').val(data.denumire);
        $('#populatie').val(data.populatie);
        $('#clima').val(data.clima);
        
        $('#id').val(id);
        $('#myModalLabel').html('Editeaza orasul');
        
        $('#add_new_record_modal').modal('show');
    });
}

function saveRecord() {
    var formData = $('#record_form').serializeObject();
    if(formData.id) {
        updateRecord(formData);
    } else {
        createRecord(formData);
    }
}

function createRecord(formData) {
    $.ajax({
        url: '/orase/',
        type: 'POST',
        accepts: {
            json: 'application/json'
        },
        data: formData,
        success: function(data) {
            $('#add_new_record_modal').modal('hide');
            
            var row = '<tr id="row_id_'+ data.id +'">'
            			+ displayColumns(data)
        				+ '</tr>';
            $('#orase').append(row);
        } 
    });
}

function updateRecord(formData) {
    $.ajax({
        url: '/orase/'+formData.id,
        type: 'PUT',
        accepts: {
            json: 'application/json'
        },
        data: formData,
        success: function(data) {
            $('#row_id_'+formData.id+'>td.denumire').html(formData.denumire);
            $('#row_id_'+formData.id+'>td.populatie').html(formData.populatie);
            $('#row_id_'+formData.id+'>td.clima').html(formData.clima);
            $('#add_new_record_modal').modal('hide');
        } 
    });
}
function deleteRecord(id) {
    $.ajax({
        url: '/orase/'+id,
        type: 'DELETE',
        success: function(data) {
            $('#row_id_'+id).remove();
        }
    });
}

//extind jQuery cu un ob o met serializabila astfel incat valorile formularului sa fie extrase ca  ob JSON
$.fn.serializeObject = function()
{
    var o = {};
    var a = this.serializeArray();
    $.each(a, function() {
        if (o[this.name] !== undefined) {
            if (!o[this.name].push) {
                o[this.name] = [o[this.name]];
            }
            o[this.name].push(this.value || '');
        } else {
            o[this.name] = this.value || '';
        }
    });
    return o;
};
