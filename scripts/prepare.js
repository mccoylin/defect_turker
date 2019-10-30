az.load_font("Staatliches")
az.style_body({
    "background": "rgb(28, 80, 121",
    "font-family": "Staatliches"
})
az.add_top_button({
    "this_class": "to_top_button",
    "text": "TOP",
    "side": "right"
})
az.style_button("to_top_button", 1, {
    "background": "rgb(233, 130, 94)"
})
az.add_sections({
    "this_class": "my_sections",
    "sections": 3
})
az.style_sections('my_sections', 1, {
    "background": "#222f3e",
    "height": "auto"
})
az.style_sections('my_sections', 2, {
    "background": "#222f3e",
    "height": "auto"
})
az.style_sections('my_sections', 3, {
    "background": "#222f3e",
    "height": "auto"
})
az.add_layout("my_sections", 1, {
    "this_class": "banner_layout",
    "row_class": "banner_layout_rows",
    "cell_class": "banner_layout_cells",
    "number_of_rows": 1,
    "number_of_columns": 3
})
az.style_layout("banner_layout", 1, {
    "width": "100%",
    "height": "auto",
    "align": "center",
    "border": 0
})
az.call_once_satisfied({
    "condition": "typeof(az.hold_value.extracted_defects_images) !== 'undefined'",
    "function": function() {
        az.add_text("banner_layout_cells", 1, {
            "this_class": "image_count",
            "text": "Number of images: " + az.hold_value.extracted_defects_images.length
        })
        az.all_style_text("image_count", {
            "color": "white",
            "font-size": "20px"
        })
        az.style_word("image_count", 1, {
            "this_class": "color_word",
            "word": az.hold_value.extracted_defects_images.length,
            "color": "rgb(233, 130, 94)"
        })
    }
})
az.add_text("banner_layout_cells", 2, {
    "this_class": "title",
    "text": "DEFECT TURKER"
})
az.style_text("title", 1, {
    "align": "center",
    "color": "whitesmoke",
    "font-size": "30px"
})
az.add_layout("banner_layout_cells", 3, {
    "this_class": "hold_icons",
    "row_class": "hold_icons_rows",
    "cell_class": "hold_icons_cells",
    "number_of_rows": 1,
    "number_of_columns": 2
})
az.style_layout("hold_icons", 1, {
    "width": "auto",
    "height": "auto",
    "align": "right",
    "border": 0
})
az.call_once_satisfied({
    "condition": "az.check_exists('hold_icons', 1)",
    "function": function() {
        az.add_icon("hold_icons_cells", 1, {
            "this_class": "my_icon_legend",
            "icon_class": "fa-square-o"
        })
        az.style_icon("my_icon_legend", 1, {
            "color": "white",
            "font-size": "36px",
            "cursor": "pointer",
            "margin": "8px"
        })
        az.add_event("my_icon_legend", 1, {
            "type": "click",
            "function": function() {
                az.add_modal({
                    "this_class": "show_legend_modal",
                    "content_class": "show_legend_modal_content"
                })
                az.style_modal("show_legend_modal", 1, {
                    "width": "700px",
                    "height": "auto"
                })
                az.add_image("show_legend_modal_content", 1, {
                    "this_class": "legend_img",
                    "image_path": "img/defect_legend2.png"
                })
                az.style_image("legend_img", 1, {
                    "align": "center",
                    "width": "100%"
                })
            }
        })
        /*
        az.add_icon("hold_icons_cells", 2, {
            "this_class": "my_icon_data",
            "icon_class": "fa-database"
        })
        az.style_icon("my_icon_data", 1, {
            "color": "white",
            "font-size": "32px",
            "cursor": "pointer",
            "margin": "8px"
        })
        az.add_event("my_icon_data", 1, {
            "type": "click",
            "function": function() {
                az.add_modal({
                    "this_class": "show_dataset",
                    "content_class": "show_dataset_content"
                })
                az.style_modal("show_dataset", 1, {
                    "width": "700px",
                    "height": "auto",
                    "background": "whtiesmoke",
                    "max-height": "500px"
                })
                az.add_layout("show_dataset_content", 1, {
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
                    "border": 0
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
                az.add_layout("show_dataset_content", 1, {
                    "this_class": "decisions_layout",
                    "row_class": "decisions_layout_rows",
                    "cell_class": "decisions_layout_cells",
                    "number_of_rows": file_paths.length,
                    "number_of_columns": 2
                })
                az.style_layout("decisions_layout", 1, {
                    "width": "700px",
                    "height": "auto",
                    "align": "center",
                    "background": "whitesmoke",
                    "border": 1
                })
                // fill rows
                az.call_multiple({
                    "iterations": file_paths.length,
                    "function": function(elem, index) {
                        az.add_text("decisions_layout_cells", (index * 2) + 1, {
                            "this_class": "table_data",
                            "text": file_paths[index]
                        })
                        az.add_text("decisions_layout_cells", (index * 2) + 2, {
                            "this_class": "table_data",
                            "text": turks[index]
                        })
                        az.all_style_text("table_data", {
                            "align": "center",
                            "color": "black",
                            "font-size": "20px"
                        })
                    }
                })
            }
        })
        */
        az.add_icon("hold_icons_cells", 2, {
            "this_class": "my_icon",
            "icon_class": "fa-download"
        })
        az.style_icon("my_icon", 1, {
            "color": "white",
            "font-size": "36px",
            "cursor": "pointer",
            "margin": "8px"
        })
        az.add_event("my_icon", 1, {
            "type": "click",
            "function": function() {
                final_arr = remove_ignored()
                az.download_object_as_csv({
                    "data": final_arr,
                    "header": ['image_path', 'label']
                })
            }
        })
        az.add_layout("my_sections", 2, {
            "this_class": "my_layout",
            "row_class": "my_layout_rows",
            "cell_class": "my_layout_cells",
            "number_of_rows": 1,
            "number_of_columns": 2
        })
        az.style_layout("my_layout", 1, {
            "width": "700px",
            "height": "250px",
            "max-height": "500px",
            "align": "center",
            "border": 0
        })
        az.all_style_layout("my_layout_cells", {
            "height": "auto",
            "halign": "center"
        })
    }
})