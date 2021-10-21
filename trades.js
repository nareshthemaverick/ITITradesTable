$(document).ready(function() {
    $('#trade').DataTable({
        "fnRowCallback" : function(nRow, aData, iDisplayIndex){
            var api = this.api();
            $("td:first", nRow).html(iDisplayIndex +1 +(api.page.info()['page'] *api.page.info()['length']));
           return nRow;
        },
    });
} );