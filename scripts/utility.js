function remove_ignored() {
    var final_arr = []
    az.hold_value.combo_for_csv.forEach(function(elem) {
        if (!elem.includes('ignore')) {
            final_arr.push(elem)
        }
    })
    return (final_arr)
}
