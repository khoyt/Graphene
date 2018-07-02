if (!!!templates) var templates = {};
templates["spinner"] = new Hogan.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");t.b("<center><i class=\"fa fa-spinner fa-spin\" style=\"font-size:60px;margin:20px auto;color:#d8d8d8\"></i></center>");return t.fl(); },partials: {}, subs: {  }});
templates["widgets__actions"] = new Hogan.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");if(!t.s(t.f("container",c,p,1),c,p,1,0,0,"")){t.b("<div class=\"label\">");t.b(t.v(t.f("title",c,p,0)));if(!t.s(t.f("title",c,p,1),c,p,1,0,0,"")){t.b(t.t(t.f("widgetType",c,p,0)));};t.b("</div>");};t.b("\n" + i);t.b("<div class=\"btn-group pull-right slice-actions parent-hover\">");t.b("\n" + i);t.b("			<span class=\"btn btn-default btn-sm fa-pencil fa edit-item\" title=\"Edit&nbsp;Settings\"></span>");t.b("\n" + i);t.b("			<span class=\"btn btn-default btn-sm fa-eye fa\" data-event=\"manage\" title=\"Visibility&nbsp;Settings\"></span>");t.b("\n" + i);t.b("			<!--");if(t.s(t.f("enable_min",c,p,1),c,p,0,392,492,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("<span class=\"btn btn-default btn-sm min-item fa fa-toggle\" data-event=\"min\" title=\"Minimize\"></span>");});c.pop();}t.b("-->");t.b("\n" + i);t.b("			<!-- 	<span class=\"btn btn-default btn-sm fa fa-resize hidden-xs\" data-event=\"full\" title=\"Full Page\"></span>");t.b("\n" + i);t.b("			<span class=\"duplicate-item btn btn-sm btn-default fa fa-copy\" data-title=\"Duplicate\"></span>-->");t.b("\n" + i);t.b("			<span class=\"btn btn-danger btn-sm fa fa-times remove-item\" title=\"Remove\"></span>");t.b("\n" + i);t.b("</div>");return t.fl(); },partials: {}, subs: {  }});
templates["widgets__header"] = new Hogan.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");t.b("<div class=\"panel-heading\" style=\"position:relative\">");t.b("\n" + i);t.b("	<h3 class=\"panel-title\">");t.b(t.v(t.f("title",c,p,0)));if(!t.s(t.f("title",c,p,1),c,p,1,0,0,"")){t.b(t.t(t.f("widgetType",c,p,0)));};t.b("</h3>");t.b("\n" + i);t.b("</div>");return t.fl(); },partials: {}, subs: {  }});
templates["widgets__limited_actions"] = new Hogan.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");t.b("<div class=\"btn-group pull-right slice-actions parent-hover\">");t.b("\n" + i);t.b("	");if(t.s(t.f("uapp_admin",c,p,1),c,p,0,78,240,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("<a href=\"/admin/appinstances/");t.b(t.v(t.f("app_id",c,p,0)));t.b("\" target=\"_blank\" class=\"btn btn-default btn-sm fa fa-edit admin-item\" data-event=\"admin_edit\"  title=\"Instance Admin\"></a>");});c.pop();}t.b("\n" + i);t.b("	");if(t.s(t.f("image_admin",c,p,1),c,p,0,273,436,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("<a href=\"/admin/groups/");t.b(t.v(t.f("group_id",c,p,0)));t.b("/images\" target=\"_blank\" class=\"btn btn-default btn-sm fa fa-edit admin-item\" data-event=\"admin_edit\"  title=\"Images Admin\"></a>");});c.pop();}t.b("\n" + i);t.b("	");if(t.s(t.f("enable_min",c,p,1),c,p,0,469,569,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("<span class=\"btn btn-default btn-sm min-item fa fa-toggle\" data-event=\"min\" title=\"Minimize\"></span>");});c.pop();}t.b("\n" + i);t.b("	");if(t.s(t.f("user_edit",c,p,1),c,p,0,600,704,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("<span class=\"btn btn-default btn-sm fa fa-pencil edit-item\" data-event=\"user_edit\"  title=\"Edit\"></span>");});c.pop();}t.b("\n" + i);t.b("</div>");return t.fl(); },partials: {}, subs: {  }});
templates["widgets_container"] = new Hogan.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");t.b("<div style=\"position:relative;");if(t.s(t.f("collapsed",c,p,1),c,p,0,44,59,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("min-height:30px");});c.pop();}t.b("\" class=\"widget ");t.b(t.v(t.f("widgetType",c,p,0)));t.b(" ");if(t.s(t.f("limit",c,p,1),c,p,0,114,192,"{{ }}")){t.rs(c,p,function(c,p,t){if(t.s(t.d("group.ids",c,p,1),c,p,0,128,140,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("group_");t.b(t.v(t.d(".",c,p,0)));t.b(" ");});c.pop();}if(!t.s(t.d("group.ids",c,p,1),c,p,1,0,0,"")){t.b("group_all ");};});c.pop();}if(!t.s(t.f("limit",c,p,1),c,p,1,0,0,"")){t.b("group_all");};t.b(" ");t.b(t.v(t.f("device",c,p,0)));t.b("\" id=\"");t.b(t.v(t.f("id",c,p,0)));t.b("\">");t.b("\n" + i);t.b("	<div class=\"cobler-li-content widget\"></div>		");t.b("\n" + i);t.b("</div>");return t.fl(); },partials: {}, subs: {  }});
templates["widgets_content"] = new Hogan.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");t.b(t.rp("<widgets__limited_actions0",c,p,""));if(t.s(t.f("container",c,p,1),c,p,0,44,207,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("<div class=\"panel panel-default\">");t.b("\n" + i);t.b(t.rp("<widgets__header1",c,p,""));t.b("	<div class=\"collapsible panel-body\" style=\"overflow: auto;\">");t.b("\n" + i);t.b("		<div>");t.b("\n" + i);t.b("		");t.b(t.t(t.f("text",c,p,0)));t.b("\n" + i);t.b("		</div>");t.b("\n" + i);t.b("	</div>");t.b("\n" + i);t.b("</div>");t.b("\n" + i);});c.pop();}if(!t.s(t.f("container",c,p,1),c,p,1,0,0,"")){t.b("	<div class=\"collapsible\" style=\"overflow: auto;\">");t.b("\n" + i);t.b("			<div>");t.b("\n" + i);t.b("		");t.b(t.t(t.f("text",c,p,0)));t.b("\n" + i);t.b("		</div>");t.b("\n" + i);t.b("	</div>");t.b("\n" + i);};return t.fl(); },partials: {"<widgets__limited_actions0":{name:"widgets__limited_actions", partials: {}, subs: {  }},"<widgets__header1":{name:"widgets__header", partials: {}, subs: {  }}}, subs: {  }});
templates["widgets_edit_container"] = new Hogan.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");t.b("<div style=\"position:relative\">");t.b("\n" + i);t.b("	<div class=\"cobler-li-content widget\"></div>");t.b("\n" + i);t.b(t.rp("<widgets__actions0",c,p,"	"));t.b("</div>");return t.fl(); },partials: {"<widgets__actions0":{name:"widgets__actions", partials: {}, subs: {  }}}, subs: {  }});
templates["widgets_empty_microapp"] = new Hogan.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");t.b("<div>");t.b("\n" + i);t.b("	<div class=\"panel panel-default on-collapse\">");t.b("\n" + i);t.b(t.rp("<widgets__header0",c,p,"		"));t.b("	</div>");t.b("\n" + i);t.b("	<div class=\"collapsible ");if(t.s(t.f("collapsed",c,p,1),c,p,0,123,159,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("cob-collapsed\" style=\"display: none;");});c.pop();}t.b("\">");t.b("\n" + i);t.b("	</div>");t.b("\n" + i);t.b("</div>");return t.fl(); },partials: {"<widgets__header0":{name:"widgets__header", partials: {}, subs: {  }}}, subs: {  }});
templates["widgets_image_header"] = new Hogan.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");t.b(t.rp("<widgets__limited_actions0",c,p,""));if(t.s(t.f("container",c,p,1),c,p,0,44,163,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("<div class=\"panel panel-default\">");t.b("\n" + i);t.b(t.rp("<widgets__header1",c,p,""));t.b("		<div class=\"collapsible panel-body\" style=\"overflow: auto;\">");t.b("\n" + i);});c.pop();}if(t.s(t.d("images.1.image",c,p,1),c,p,0,199,534,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("		<div class=\"slider-wrapper theme-default\">");t.b("\n" + i);t.b("			<div class=\"ribbon\"></div>");t.b("\n" + i);t.b("			<div class=\"slider\" class=\"nivoSlider\">");t.b("\n" + i);if(t.s(t.f("images",c,p,1),c,p,0,333,501,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("					");if(t.s(t.f("url",c,p,1),c,p,0,347,403,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("<a href=\"");t.b(t.v(t.f("url",c,p,0)));t.b("\" ");if(t.s(t.f("window",c,p,1),c,p,0,376,391,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("target=\"_blank\"");});c.pop();}t.b(">");});c.pop();}t.b("<img src=\"/image/");t.b(t.v(t.f("image",c,p,0)));t.b("\" alt=\"");t.b(t.v(t.f("text",c,p,0)));t.b("\" title=\"");t.b(t.t(t.f("overlay",c,p,0)));t.b("\"/>");if(t.s(t.f("url",c,p,1),c,p,0,484,488,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("</a>");});c.pop();}t.b("\n" + i);});c.pop();}t.b("			</div>");t.b("\n" + i);t.b("		</div>");t.b("\n" + i);});c.pop();}if(!t.s(t.d("images.1.image",c,p,1),c,p,1,0,0,"")){if(t.s(t.f("images",c,p,1),c,p,0,589,798,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("			");if(t.s(t.f("url",c,p,1),c,p,0,601,657,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("<a href=\"");t.b(t.v(t.f("url",c,p,0)));t.b("\" ");if(t.s(t.f("window",c,p,1),c,p,0,630,645,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("target=\"_blank\"");});c.pop();}t.b(">");});c.pop();}t.b("<img style=\"max-width: 100%;margin-bottom: 20px;\" src=\"/image/");t.b(t.v(t.f("image",c,p,0)));t.b("\" alt=\"");t.b(t.v(t.f("text",c,p,0)));t.b("\" title=\"");t.b(t.t(t.f("overlay",c,p,0)));t.b("\"/>");if(t.s(t.f("url",c,p,1),c,p,0,783,787,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("</a>");});c.pop();}t.b("\n" + i);});c.pop();}t.b("		");if(!t.s(t.f("images",c,p,1),c,p,1,0,0,"")){t.b("Click Here to choose an Image");};t.b("\n" + i);};if(t.s(t.f("container",c,p,1),c,p,0,900,917,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("		</div>");t.b("\n" + i);t.b("</div>");t.b("\n" + i);});c.pop();}return t.fl(); },partials: {"<widgets__limited_actions0":{name:"widgets__limited_actions", partials: {}, subs: {  }},"<widgets__header1":{name:"widgets__header", partials: {}, subs: {  }}}, subs: {  }});
templates["widgets_links"] = new Hogan.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");if(t.s(t.f("links",c,p,1),c,p,0,10,596,"{{ }}")){t.rs(c,p,function(c,p,t){if(t.s(t.f("favorite",c,p,1),c,p,0,24,582,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("  <a href=\"");t.b(t.v(t.f("link",c,p,0)));t.b("\" data-guid=\"");t.b(t.v(t.f("id",c,p,0)));t.b("\" data-image=\"");t.b(t.v(t.f("image",c,p,0)));t.b("\" data-icon=\"");t.b(t.v(t.f("icon",c,p,0)));t.b("\" data-color=\"");t.b(t.v(t.f("color",c,p,0)));t.b("\" data-link=\"");t.b(t.v(t.f("link",c,p,0)));t.b("\" data-title=\"");t.b(t.v(t.f("title",c,p,0)));t.b("\" target=\"_blank\" class=\"filterable list-group-item\" style=\"color:#005A43\">");if(t.s(t.f("icon",c,p,1),c,p,0,258,307,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("<i style=\"color:");t.b(t.v(t.f("color",c,p,0)));t.b("\"  class=\"");t.b(t.v(t.f("icon",c,p,0)));t.b("\"></i>");});c.pop();}t.b(" ");if(t.s(t.f("image",c,p,1),c,p,0,327,379,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("<img height=\"16px\" alt=\"");t.b(t.v(t.f("title",c,p,0)));t.b("\" src=\"");t.b(t.v(t.f("image",c,p,0)));t.b("\"/>");});c.pop();}t.b(" ");t.b(t.v(t.f("title",c,p,0)));t.b("<i style=\"font-size:21px;position: absolute;top: 10px;right: 10px;");if(t.s(t.f("favorite",c,p,1),c,p,0,478,488,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("color:gold");});c.pop();}t.b("\" class=\"favorites parent-hover fa fa-star");if(!t.s(t.f("favorite",c,p,1),c,p,1,0,0,"")){t.b("-o");};t.b("\"></i></a>");t.b("\n" + i);});c.pop();}});c.pop();}t.b("<div class=\"panel-default\">");t.b("\n" + i);t.b("<div class=\"panel-heading\" role=\"tab\" id=\"headingOne\">");t.b("\n" + i);t.b("  <h4 class=\"panel-title\">");t.b("\n" + i);t.b("    <a id=\"available_links\" data-toggle=\"collapse\" href=\"#links-container\" aria-expanded=\"true\" aria-controls=\"links-container\" ");if(t.s(t.f("toggle",c,p,1),c,p,0,916,933,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("class=\"collapsed\"");});c.pop();}t.b(">");t.b("\n" + i);t.b("      <i class=\"fa fa-collapse fa-fw\"></i> Available Links");t.b("\n" + i);t.b("    </a>");t.b("\n" + i);t.b("  </h4>");t.b("\n" + i);t.b("</div>");t.b("\n");t.b("\n");t.b("\n" + i);t.b("<div id=\"links-container\" class=\"panel-collapse collapse ");if(!t.s(t.f("toggle",c,p,1),c,p,1,0,0,"")){t.b("in");};t.b("\" ");if(t.s(t.f("toggle",c,p,1),c,p,0,1125,1145,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("style=\"height: 0px;\"");});c.pop();}t.b(" role=\"tabpanel\" aria-labelledby=\"links-container\">");t.b("\n" + i);t.b("      <div class=\"panel-body\" style=\"padding:0\">");t.b("\n" + i);t.b("      	<div class=\"list-group\" style=\"margin-bottom:0;min-height:30px\" data-title=\"links\" id=\"links\" data-label=\"Useful Links\">");t.b("\n" + i);if(t.s(t.f("links",c,p,1),c,p,0,1403,2022,"{{ }}")){t.rs(c,p,function(c,p,t){if(!t.s(t.f("favorite",c,p,1),c,p,1,0,0,"")){t.b("          <a href=\"");t.b(t.v(t.f("link",c,p,0)));t.b("\" data-guid=\"");t.b(t.v(t.f("id",c,p,0)));t.b("\" data-image=\"");t.b(t.v(t.f("image",c,p,0)));t.b("\" data-icon=\"");t.b(t.v(t.f("icon",c,p,0)));t.b("\" data-color=\"");t.b(t.v(t.f("color",c,p,0)));t.b("\" data-link=\"");t.b(t.v(t.f("link",c,p,0)));t.b("\" data-title=\"");t.b(t.v(t.f("title",c,p,0)));t.b("\" target=\"_blank\" class=\"filterable list-group-item\" style=\"color:#005A43\">");if(t.s(t.f("icon",c,p,1),c,p,0,1667,1716,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("<i style=\"color:");t.b(t.v(t.f("color",c,p,0)));t.b("\"  class=\"");t.b(t.v(t.f("icon",c,p,0)));t.b("\"></i>");});c.pop();}t.b(" ");if(t.s(t.f("image",c,p,1),c,p,0,1736,1788,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("<img height=\"16px\" alt=\"");t.b(t.v(t.f("title",c,p,0)));t.b("\" src=\"");t.b(t.v(t.f("image",c,p,0)));t.b("\"/>");});c.pop();}t.b(" ");t.b(t.v(t.f("title",c,p,0)));t.b("<i style=\"font-size:21px;position: absolute;top: 10px;right: 10px;");if(t.s(t.f("favorite",c,p,1),c,p,0,1887,1897,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("color:gold");});c.pop();}t.b("\" class=\"favorites parent-hover fa fa-star");if(!t.s(t.f("favorite",c,p,1),c,p,1,0,0,"")){t.b("-o");};t.b("\"></i></a>");t.b("\n");t.b("\n" + i);};});c.pop();}t.b("      </div>");t.b("\n" + i);t.b("    </div>");t.b("\n" + i);t.b("</div></div>");return t.fl(); },partials: {}, subs: {  }});
templates["widgets_links_container"] = new Hogan.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");t.b("<div class=\"btn-group pull-right slice-actions parent-hover\">");t.b("\n" + i);t.b("	");if(t.s(t.f("link_admin",c,p,1),c,p,0,78,239,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("<a href=\"/admin/groups/");t.b(t.v(t.f("group_id",c,p,0)));t.b("/links\" target=\"_blank\" class=\"btn btn-default btn-sm fa fa-edit admin-item\" data-event=\"admin_edit\"  title=\"Links Admin\"></a>");});c.pop();}t.b("\n" + i);t.b("</div>");t.b("\n" + i);if(t.s(t.f("container",c,p,1),c,p,0,276,495,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("<div class=\"panel panel-default\">");t.b("\n" + i);t.b("<div class=\"panel-heading\" style=\"position:relative\">");t.b("\n" + i);t.b("	<h3 class=\"panel-title\">");t.b(t.v(t.f("title",c,p,0)));if(!t.s(t.f("title",c,p,1),c,p,1,0,0,"")){t.b(t.v(t.d("loaded.name",c,p,0)));if(!t.s(t.d("loaded.name",c,p,1),c,p,1,0,0,"")){t.b(t.t(t.f("widgetType",c,p,0)));};};t.b("</h3>");t.b("\n" + i);t.b("</div>");t.b("\n" + i);});c.pop();}t.b("    <div id=\"");t.b(t.v(t.f("title",c,p,0)));t.b(t.v(t.f("id",c,p,0)));t.b("\" class=\"panel-collapse ");if(t.s(t.f("collapse",c,p,1),c,p,0,575,583,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("collapse");});c.pop();}if(!t.s(t.f("collapse",c,p,1),c,p,1,0,0,"")){t.b("in");};t.b("\" role=\"tabpanel\" aria-labelledby=\"");t.b(t.v(t.f("title",c,p,0)));t.b(t.v(t.f("id",c,p,0)));t.b("\">");t.b("\n" + i);t.b("      <div class=\"panel-body\" style=\"padding:0\">");t.b("\n" + i);t.b("        <label for=\"link_filter\" class=\"sr-only\">Filter</label><input id=\"link_filter\" type=\"text\" class=\"form-control filter\" data-selector=\".link_collection\" name=\"filter\" placeholder=\"Filter...\">");t.b("\n");t.b("\n" + i);t.b("      	<div class=\"list-group link_collection\" style=\"margin-bottom:0;min-height:30px\" data-title=\"link_filter\">");t.b("\n" + i);t.b(t.rp("<widgets_links0",c,p,"					"));t.b("				</div>");t.b("\n" + i);t.b("      </div>");t.b("\n" + i);t.b("    </div>");t.b("\n" + i);if(t.s(t.f("container",c,p,1),c,p,0,1112,1120,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("</div>");t.b("\n" + i);});c.pop();}return t.fl(); },partials: {"<widgets_links0":{name:"widgets_links", partials: {}, subs: {  }}}, subs: {  }});
templates["widgets_microapp"] = new Hogan.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");t.b(t.rp("<widgets__limited_actions0",c,p,""));if(t.s(t.f("container",c,p,1),c,p,0,44,448,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("<div class=\"panel panel-default\">");t.b("\n" + i);t.b("<div class=\"panel-heading\" style=\"position:relative\">");t.b("\n" + i);t.b("	<h3 class=\"panel-title\">");t.b(t.v(t.f("title",c,p,0)));if(!t.s(t.f("title",c,p,1),c,p,1,0,0,"")){t.b(t.v(t.d("loaded.name",c,p,0)));if(!t.s(t.d("loaded.name",c,p,1),c,p,1,0,0,"")){t.b(t.t(t.f("widgetType",c,p,0)));};};t.b("</h3>");t.b("\n" + i);t.b("</div>");t.b("\n" + i);t.b("	<div class=\"collapsible panel-body\" style=\"overflow: auto;\">");t.b("\n" + i);t.b("		<center><i class=\"fa fa-spinner fa-spin\" style=\"font-size:60px;margin:40px auto;color:#eee\"></i></center>");t.b("\n" + i);t.b("	</div>");t.b("\n" + i);t.b("</div>");t.b("\n" + i);});c.pop();}if(!t.s(t.f("container",c,p,1),c,p,1,0,0,"")){t.b("	<div class=\"collapsible\" style=\"overflow: auto;\">");t.b("\n" + i);t.b("	</div>");t.b("\n" + i);};return t.fl(); },partials: {"<widgets__limited_actions0":{name:"widgets__limited_actions", partials: {}, subs: {  }}}, subs: {  }});
templates["widgets_summary"] = new Hogan.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");t.b("<div>");t.b("\n" + i);t.b("Unique ID: ");t.b(t.v(t.d("user.unique_id",c,p,0)));t.b("\n" + i);t.b("</div>");return t.fl(); },partials: {}, subs: {  }});
