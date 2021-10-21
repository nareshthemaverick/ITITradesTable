$(document).ready(function() {
    $('#trade').DataTable({
        "fnRowCallback" : function(nRow, aData, iDisplayIndex){
            $("td:first", nRow).html(iDisplayIndex +1);
           return nRow;
        },
    });
} );