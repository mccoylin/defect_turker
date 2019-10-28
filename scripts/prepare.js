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
                /*
                az.add_layout("show_legend_modal_content", 1, {
                    "this_class": "hold_all_legend",
                    "row_class": "hold_all_legend_rows",
                    "cell_class": "hold_all_legend_cells",
                    "number_of_rows": 1,
                    "number_of_columns": 2
                })
                az.style_layout("hold_all_legend", 1, {
                    "width": "100%",
                    "height": "400px",
                    "align": "center",
                    "column_widths": ['30%', '70%'],
                    "border": 0
                })
                defects_big_list = ['breakout', 'pin hole', 'open', 'under-etch', 'mousebite', 'missing conductor', 'spur', 'short', 'wrong hole', 'conductor too close', 'spurious copper', 'excessive short', 'missing hole', 'over-etch']
                az.add_layout("hold_all_legend_cells", 1, {
                    "this_class": "legend_text_layout",
                    "row_class": "legend_text_layout_rows",
                    "cell_class": "legend_text_layout_cells",
                    "number_of_rows": defects_big_list.length,
                    "number_of_columns": 2
                })
                az.style_layout("legend_text_layout", 1, {
                    "width": "auto",
                    "height": "auto",
                    "align": "center",
                    "border": 0
                })
                */
                az.add_image("show_legend_modal_content", 1, {
                    "this_class": "legend_img",
                    "image_path": "img/defect_legend2.png"
                })
                az.style_image("legend_img", 1, {
                    "align": "center",
                    "width": "100%"
                })
                /*
                az.call_multiple({
                    "iterations": defects_big_list.length,
                    "function": function(elem, index) {
                        az.add_text("legend_text_layout_cells", (index * 2) + 1, {
                            "this_class": "legend_fill",
                            "text": index + 1
                        })
                        az.add_text("legend_text_layout_cells", (index * 2) + 2, {
                            "this_class": "legend_fill_word",
                            "text": defects_big_list[index]
                        })
                        if(defect_types.includes(defects_big_list[index])) {
                             az.style_text("legend_fill_word", index + 1, {
                                 "color" : "orangered"
                             })
                        }
                    }
                })

                az.add_text("show_legend_modal_content", 1, {
                    "this_class" : "book_reference",
                    "text" : "reference"
                })
                az.style_text("book_reference", 1, {
                    "color" : "blue",
                    "cursor" : "pointer",
                    "align" : "center",
                    "margin-top" : "-30px"
                })
                az.add_event("book_reference", 1, {
                    "type" : "click",
                    "function" : function() {
                        az.navigate_to("https://bit.ly/2poVyld", "new_tab")
                    }
                })
                */
            }
        })
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
                az.download_object_as_csv({
                    "data": az.hold_value.combo_for_csv,
                    "header": ['image_path', 'label']
                })
            }
        })
/*
        az.add_tooltip("my_icon_legend", 1, {
            "this_class": "tip_1",
            "text": "DEFECT<br>LEGEND"
        })
        az.add_tooltip("my_icon", 1, {
            "this_class": "tip_2",
            "text": "DOWNLOAD<br>DATA"
        })
        az.style_tooltip("tip_1", 1, {
            "background" : "black",
            "margin-top" : "-20px",
            "margin-left" : "-20px",
            "font-family" : "arial",
            "width" : "auto"
        })
        az.style_tooltip("tip_2", 1, {
            "background" : "black",
            "margin-top" : "-20px",
            "margin-left" : "-20px",
            "font-family" : "arial",
            "width" : "auto"
        })
        */
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