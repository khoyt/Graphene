Cobler.types.Links = function(container){
	function render() {
		return templates['widgets_links_container'].render(get(), templates);
	}
	function get() {
		item.widgetType = 'Links';
		return item;
	}
	function set(newItem) {
		$.extend(item, newItem);
	}
	var item = {
		title: 'Links',
	}
	var fields = {
		Title: {},
		"Container?":{name:'container', type: 'checkbox'},

		// Text: {type: 'contenteditable', label: false}//, show:{matches:{name:'editor',value:true}},parsable:'show'},
	}
	return {
	  container:container,
		fields: fields,
		render: render,
		toJSON: get,
		edit: berryEditor.call(this, container),
		get: get,
		set: set,		initialize: function(el){
			 $.ajax({
          url: '/api/user_links',
          dataType : 'json',
					type: 'GET',

					success  : function(el,data){
						this.set({links:data})
						$(el).find('.link_collection').html(templates['widgets_links'].render(this.get(), templates))
						}.bind(this,el)
      })
		}
	}
}
