defect_types = ['open', 'short', 'mousebite', 'spur', 'pin hole', 'spurious copper']
az.call_once_satisfied({
    "condition": "typeof(az.hold_value.extracted_defects_images) !== 'undefined' && az.check_exists('my_layout', 1)",
    "function": function() {
        az.add_image("my_layout_cells", 2, {
            "this_class": "defect_image",
            "image_path": "img/" + az.hold_value.extracted_defects_images[0]
        })
        az.style_image("defect_image", 1, {
            "width": "100px",
            "border": "10px solid white",
            "border-radius": "10px",
            "align": "center"
        })
    }
})
az.call_multiple({
    "iterations": defect_types.length,
    "function": function(elem, index) {
        az.add_button("my_layout_cells", 1, {
            "this_class": "vote_button",
            "text": defect_types[index]
        })
        az.all_style_button("vote_button", {
            "display": "inline",
            "background": "rgb(233, 130, 94)",
            "margin": "10px",
            "color": "white",
            "border": "1px solid white",
            "outline": 0
        })
    }
})
az.add_html("my_sections", 3, {
    "html": "<div class='hold_label_count'></div>"
})
click_cnt = 0
file_paths = []
turks = []
az.hold_value.combo_for_csv = []
az.all_add_event("vote_button", {
    "type": "click",
    "function": function(this_id) {
        click_cnt++
        if (typeof(az.hold_value.extracted_defects_images[click_cnt]) !== 'undefined') {
            az.remove_element("defect_image", 1)
            az.add_image("my_layout_cells", 2, {
                "this_class": "defect_image",
                "image_path": "img/" + az.hold_value.extracted_defects_images[click_cnt]
            })
            az.style_image("defect_image", 1, {
                "width": "100px",
                "border": "10px solid white",
                "border-radius": "10px",
                "align": "center"
            })
            az.hold_value.filename = az.hold_value.extracted_defects_images[click_cnt - 1]
            if (az.get_target_instance(this_id) === 1) {
                az.hold_value.turk_choice = defect_types[0]
            }
            if (az.get_target_instance(this_id) === 2) {
                az.hold_value.turk_choice = defect_types[1]
            }
            if (az.get_target_instance(this_id) === 3) {
                az.hold_value.turk_choice = defect_types[2]
            }
            if (az.get_target_instance(this_id) === 4) {
                az.hold_value.turk_choice = defect_types[3]
            }
            if (az.get_target_instance(this_id) === 5) {
                az.hold_value.turk_choice = defect_types[4]
            }
            if (az.get_target_instance(this_id) === 6) {
                az.hold_value.turk_choice = defect_types[5]
            }
            file_paths.push(az.hold_value.filename)
            turks.push(az.hold_value.turk_choice)
            inner_for_csv = []
            inner_for_csv.push(az.hold_value.filename)
            inner_for_csv.push(az.hold_value.turk_choice)
            az.hold_value.combo_for_csv.push(inner_for_csv)
            az.all_remove_element("label_count")
            az.add_text("hold_label_count", 1, {
                "this_class": "label_count",
                "text": "# images labelled: " + click_cnt
            })
            az.all_style_text("label_count", {
                "color": "white",
                "font-size": "20px",
                "align": "center",
                "margin-bottom": "10px"
            })
            az.style_word("label_count", 1, {
                "this_class": "color_word",
                "word": click_cnt,
                "color": "rgb(233, 130, 94)"
            })
            if (click_cnt === 1) {
                az.add_layout("my_sections", 3, {
                    "this_class": "header_layout",
                    "row_class": "header_layout_rows",
                    "cell_class": "header_layout_cells",
                    "number_of_rows": 1,
                    "number_of_columns": 2
                })
                az.style_layout("header_layout", 1, {
                    "width": "700px",
                    "height": "auto",
                    "align": "center",
                    "background": "whitesmoke",
                    "border": 1
                })
                az.add_text("header_layout_cells", 1, {
                    "this_class": "header",
                    "text": "IMAGE"
                })
                az.add_text("header_layout_cells", 2, {
                    "this_class": "header",
                    "text": "LABEL"
                })
                az.all_style_text("header", {
                    "align": "center",
                    "color": "rgb(233, 130, 94)",
                    "font-size": "20px",
                    "text-shadow": "1px 1px 1px black"
                })
            }
            az.add_layout("my_sections", 3, {
                "this_class": "decisions_layout_" + click_cnt,
                "row_class": "decisions_layout_" + click_cnt + "_rows",
                "cell_class": "decisions_layout_" + click_cnt + "_cells",
                "number_of_rows": 1,
                "number_of_columns": 2
            })
            az.style_layout("decisions_layout_" + click_cnt, 1, {
                "width": "700px",
                "height": "auto",
                "align": "center",
                "background": "whitesmoke",
                "border": 1
            })
            az.add_text("decisions_layout_" + click_cnt + "_cells", 1, {
                "this_class": "table_data",
                "text": file_paths[click_cnt - 1]
            })
            az.add_text("decisions_layout_" + click_cnt + "_cells", 2, {
                "this_class": "table_data",
                "text": turks[click_cnt - 1]
            })
            az.all_style_text("table_data", {
                "align": "center",
                "color": "black",
                "font-size": "20px"
            })
        } else {
            alert('no more images to turk')
        }
    }
})