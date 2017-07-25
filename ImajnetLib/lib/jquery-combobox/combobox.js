Combobox = {
	defaultOptions: {
		_create: function() {
			var input,
				self = this,
				select = this.element.hide(),
				selected = select.children( ":selected" ),
				value = selected.val() ? selected.text() : "",
				wrapper = this.wrapper = jQuery( "<span>" )
					.addClass( "ui-combobox" )
					.insertAfter( select );

			input = jQuery( "<input>" )
				.appendTo( wrapper )
				.val( value )
				.addClass( "ui-state-default ui-combobox-input" )
				.autocomplete({
					delay: 0,
					minLength: 0,
					source: function( request, response ) {
						if(typeof MainMethodsCore !== 'undefined' && MainMethodsCore.rowIsAddNew(this.element[0].parentNode.parentNode.parentNode.id)) { // Custom added
						    var selectId = this.element[0].parentNode.previousElementSibling.id;
	            			FeaturesListing.cacheNewRowData(selectId.substring(selectId.indexOf('_') + 1, selectId.length), this.element[0].value);
	            		}
						var matcher = new RegExp( jQuery.ui.autocomplete.escapeRegex(request.term), "i" );
						response( select.children( "option" ).map(function() {
							var text = jQuery( this ).text();
							if ( this.value && ( !request.term || matcher.test(text) ) )
								return {
									label: text.replace(
										new RegExp(
											"(?![^&;]+;)(?!<[^<>]*)(" +
											jQuery.ui.autocomplete.escapeRegex(request.term) +
											")(?![^<>]*>)(?![^&;]+;)", "gi"
										), "<strong>$1</strong>" ),
									value: text,
									option: this
								};
						}) );
					},
					select: function( event, ui ) {
						ui.item.option.selected = true;
						self._trigger( "selected", event, {
							item: ui.item.option
						});
					},
					change: function( event, ui ) {
						if(self.options.permisive) {
							return true;
						} // Custom added
						if ( !ui.item ) {
							var matcher = new RegExp( "^" + jQuery.ui.autocomplete.escapeRegex( jQuery(this).val() ) + "$", "i" ),
								valid = false;
							select.children( "option" ).each(function() {
								if ( jQuery( this ).text().match( matcher ) ) {
									this.selected = valid = true;
									return false;
								}
							});
							if ( !valid ) {
								// remove invalid value, as it didn't match anything
								jQuery( this ).val( "" );
								select.val( "" );
								input.data( "autocomplete" ).term = "";
								return false;
							}
						}
					}
				})
				.addClass('ui-widget ui-widget-content ui-corner-left');
	    		input.val(jQuery("#"+select.attr("id")+" :selected").text() );

			input.data( "autocomplete" )._renderItem = function( ul, item ) {
				jQuery('.imajnetAutocomplete').css('margin-top', '0');
				ul.addClass('imajnetAutocomplete'); // TODO custom added
//				if(this.element[0].parentNode.offsetParent && this.element[0].parentNode.offsetParent.id == 'styleEditorTabsContainer') {
//					//ul.css('margin-top', '-320px');
//					//ul.css('top', (jQuery('#' + this.element[0].parentNode.offsetParent.id).offset().top - 320) + 'px !important');
//					ul.addClass('styleEditorImagesSelectOptions');
//					//ul.css('top', (jQuery('#' + this.element[0].parentNode.offsetParent.id).offset().top - 320) + 'px !important');
//				} else if(this.element[0].parentNode.offsetParent && this.element[0].parentNode.offsetParent.id == 'popupRoadSchematic') {
//					ul.addClass('popupRoadSchematicSelectOptions');
//				}
				if(this.element[0] && this.element[0].parentNode && this.element[0].parentNode.offsetParent) {
					ul.addClass(this.element[0].parentNode.offsetParent.id + 'SelectOptions');
				}
				return jQuery( "<li></li>" )
					.data( "item.autocomplete", item )
					.append( "<a>" + item.label + "</a>" )
					.appendTo( ul );
			};

			jQuery( "<a>" )
				.attr( "tabIndex", -1 )
				.attr( "title", "Show All Items" )
				.text(typeof CommonCore !== 'undefined' && CommonCore.isMobile ? '+' : '') // Custom added
				.appendTo( wrapper )
				.button({
					icons: {
						primary: "ui-icon-triangle-1-s"
					},
					text: false
				})
				.removeClass( "ui-corner-all" )
				.addClass( "ui-corner-right ui-combobox-toggle" )
				.click(function() {
					// close if already visible
					if ( input.autocomplete( "widget" ).is( ":visible" ) ) {
						input.autocomplete( "close" );
						return;
					}

					// work around a bug (likely same cause as #5265)
					jQuery( this ).blur();

					// pass empty string as value to search for, displaying all results
					input.autocomplete( "search", "" );
					input.focus();
				});
		},

		/*_setOption: function(key, value) {
			if (key == "source") {
				// Create new option elements for the select
				this.element.empty();
				for (var i in value) {
					var val = i;
					var text = value[i];
					if (typeof value[i] == "object") {
						val = value[i].value;
						text = value[i].label;
					}
					this.element.append('<option value="' + val + '">' + text + '</option>');
				}
				// Empty the current value
				this.input.val("");
				// Have the autocomplete reread the source
				this.input.data("autocomplete")._initSource();
			} else {
				// Delegate to parent class
				if(this.input) {
					this.input.data("autocomplete")._setOption(key, value);
				}
			}
		},
		
        refresh:function(){ 
            selected = this.element.children( ":selected" );
            this.input.val(selected.text());
        },
        */
		destroy: function() {
//			if(this.options.permisive) { // Custom added
//				this._trigger('selected', event, null);
//			}
			var comboboxParent = this.element.parent();
			this.wrapper.remove();
			this.element.show();
			jQuery.Widget.prototype.destroy.call(this);
			
			if(this.options.permisive) { // Custom added
				Nigsys.onComboboxDestroy(comboboxParent, this.wrapper.children('.ui-combobox-input').val());
			}
		}
	},
	
	permisiveOptions: {
		_create: function() {
			var input,
				self = this,
				select = this.element.hide(),
				selected = select.children( ":selected" ),
				value = selected.val() ? selected.text() : "",
				wrapper = this.wrapper = jQuery( "<span>" )
					.addClass( "ui-combobox" )
					.insertAfter( select );

			input = jQuery( "<input>" )
				.appendTo( wrapper )
				.val( value )
				.addClass( "ui-state-default ui-combobox-input" )
				.autocomplete({
					delay: 0,
					minLength: 0,
					source: function( request, response ) {
						var matcher = new RegExp( jQuery.ui.autocomplete.escapeRegex(request.term), "i" );
						response( select.children( "option" ).map(function() {
							var text = jQuery( this ).text();
							if ( this.value && ( !request.term || matcher.test(text) ) )
								return {
									label: text.replace(
										new RegExp(
											"(?![^&;]+;)(?!<[^<>]*)(" +
											jQuery.ui.autocomplete.escapeRegex(request.term) +
											")(?![^<>]*>)(?![^&;]+;)", "gi"
										), "<strong>$1</strong>" ),
									value: text,
									option: this
								};
						}) );
					},
					select: function( event, ui ) {
						ui.item.option.selected = true;
						self._trigger( "selected", event, {
							item: ui.item.option
						});
					}
				})
				.addClass('ui-widget ui-widget-content ui-corner-left');
	    		input.val(jQuery("#"+select.attr("id")+" :selected").text() );

			input.data( "autocomplete" )._renderItem = function( ul, item ) {
				return jQuery( "<li></li>" )
					.data( "item.autocomplete", item )
					.append( "<a>" + item.label + "</a>" )
					.appendTo( ul );
			};
			jQuery( "<a>" )
				.attr( "tabIndex", -1 )
				.attr( "title", "Show All Items" )
				.appendTo( wrapper )
				.button({
					icons: {
						primary: "ui-icon-triangle-1-s"
					},
					text: false
				})
				.removeClass( "ui-corner-all" )
				.addClass( "ui-corner-right ui-combobox-toggle" )
				.click(function() {
					// close if already visible
					if ( input.autocomplete( "widget" ).is( ":visible" ) ) {
						input.autocomplete( "close" );
						return;
					}

					// work around a bug (likely same cause as #5265)
					jQuery( this ).blur();

					// pass empty string as value to search for, displaying all results
					input.autocomplete( "search", "" );
					input.focus();
				});
		},

		destroy: function() {
			this.wrapper.remove();
			this.element.show();
			jQuery.Widget.prototype.destroy.call( this );
		}
	},
	
	init: function() {
		jQuery.widget( "ui.combobox", this.defaultOptions);
		jQuery.widget( "ui.comboboxPermisive", this.permisiveOptions);
	}
};
