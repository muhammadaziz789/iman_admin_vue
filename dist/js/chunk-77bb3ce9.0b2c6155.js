(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-77bb3ce9"],{"1cdf":function(t,n,e){"use strict";e.r(n);var o=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("a-navigation",{attrs:{list:[{name:t.$t("Список продуктов"),link:""}],isBack:{flag:!0,link:"/merchants/list/"+t.$route.query.parent_id+"/transactions"}}}),e("a-card",[e("a-table",{attrs:{columns:t.columns,"data-source":t.bond.products,"row-key":function(t){return t.id}},scopedSlots:t._u([{key:"min_investment_amount",fn:function(n){return e("span",{},[t._v(" "+t._s(t.$moneyFormat(n.min_investment_amount)))])}},{key:"min_percent",fn:function(n){return e("span",{},[e("strong",[t._v(" "+t._s(n.min_percent)+"% ~ "+t._s(n.max_percent)+"%")])])}},{key:"actions",fn:function(n){return e("span",{staticClass:"span"},[e("delete-btn",{on:{confirm:function(e){return t.deleteCategory(n)}}}),e("edit-btn",{on:{click:function(e){return t.$router.push("/category/list/edit/"+n.id)}}})],1)}}])},[e("span",{attrs:{slot:"index"},slot:"index"},[t._v(" "+t._s(t._f("moment")(this.bond.created_at,t.$dateFormat)))])])],1)],1)},s=[],a=(e("b64b"),{data:function(){return{columns:[{title:this.$t("date"),scopedSlots:{customRender:"index"},key:"index"},{title:this.$t("Name_of_product"),dataIndex:"name",key:"name"},{title:this.$t("Price"),dataIndex:"price",key:"price"}],bond:{},bonds1:[],transactions:[]}},methods:{getStatusColor:function(t){var n;switch(t){case"pending":n="orange";break;case"done":n="green";break;default:n=""}return n},getBond:function(t){var n=this;this.$store.dispatch("getBond",this.$route.params.id).then((function(t){n.bond=t.bond,n.bonds1=Object.keys(t.bond)}))}},created:function(t){this.getBond(t)}}),i=a,r=(e("ffdd"),e("2877")),c=Object(r["a"])(i,o,s,!1,null,null,null);n["default"]=c.exports},b413:function(t,n,e){},ffdd:function(t,n,e){"use strict";e("b413")}}]);