/**
 * Created by macfly on 21/02/2015.
 */

(function(){
    alert("init");
    var x;
    x = {
        name: "test",
        test: "test"
    };

    /**
     *
     * @param index
     */
    function extracted(index) {
        alert('createform submitted');
    }

    $(document).ready(function(){
       $(document).on("submit","form", function () {
          extracted(0);
       });
    });

    var htmlFragment = "<div>\n    <ul>\n        <li></li>\n        <li></li>\n        <li></li>\n    </ul></div>\n";
    var test = "dixxv"
})();
