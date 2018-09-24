(function(a,b){'object'==typeof exports&&'object'==typeof module?module.exports=b():'function'==typeof define&&define.amd?define('@usertech/apollo-client-utils',[],b):'object'==typeof exports?exports['@usertech/apollo-client-utils']=b():a['@usertech/apollo-client-utils']=b()})('undefined'==typeof self?this:self,function(){return function(a){function b(d){if(c[d])return c[d].exports;var e=c[d]={i:d,l:!1,exports:{}};return a[d].call(e.exports,e,e.exports,b),e.l=!0,e.exports}var c={};return b.m=a,b.c=c,b.d=function(a,c,d){b.o(a,c)||Object.defineProperty(a,c,{configurable:!1,enumerable:!0,get:d})},b.n=function(a){var c=a&&a.__esModule?function(){return a['default']}:function(){return a};return b.d(c,'a',c),c},b.o=function(a,b){return Object.prototype.hasOwnProperty.call(a,b)},b.p='',b(b.s=2)}([function(a){a.exports=require('apollo-cache-inmemory')},function(a){a.exports=require('apollo-link')},function(a,b,c){a.exports=c(3)},function(a,b,c){'use strict';Object.defineProperty(b,'__esModule',{value:!0});var d=c(4),e=c.n(d),f=c(0),g=c.n(f),h=c(1),i=c.n(h),j=c(5),k=c.n(j);const l=k.a`
	query IntrospectionFragmentMatcherQuery {
		__schema {
			types {
				kind
				name
				possibleTypes {
					name
				}
			}
		}
	}
`;var m=({link:a})=>new Promise(function(b,c){let d,e;return Promise.resolve(Object(h.makePromise)(Object(h.execute)(a,{query:l}))).then(function(a){try{return d=a,e={__schema:{types:d.data.__schema.types.filter((a)=>null!==a.possibleTypes)}},b(new f.IntrospectionFragmentMatcher({introspectionQueryResultData:e}))}catch(a){return c(a)}},c)}),n=Object.assign||function(a){for(var b,c=1;c<arguments.length;c++)for(var d in b=arguments[c],b)Object.prototype.hasOwnProperty.call(b,d)&&(a[d]=b[d]);return a};var o=({link:a,useIntrospectionFragmentMatcher:b=!1})=>new Promise(function(c,e){function g(){return i=new f.InMemoryCache(h),c(new d.ApolloClient({link:a,cache:i}))}let h,i;return h={},b?Promise.resolve(m({link:a})).then(function(a){try{return h=n({},h,{fragmentMatcher:a}),g.call(this)}catch(a){return e(a)}}.bind(this),e):g.call(this)}),p=c(6),q=c.n(p),r=c(7),s=c.n(r);var t=({typeDefs:a,resolvers:b,mocks:c,defaultOperationDelay:d=500,immediateOperations:e={},operationsDelays:f={IntrospectionFragmentMatcherQuery:1200}})=>{const g=Object(r.makeExecutableSchema)({typeDefs:a,resolvers:b});Object(r.addMockFunctionsToSchema)({schema:g,mocks:c});const i=new p.SchemaLink({schema:g,context:({getContext:a})=>a()}),j=new h.ApolloLink((a,b)=>{const c=a.operationName,g=e[c],i=f[c],j=i||(g?0:d);return new h.Observable((c)=>{let d;return setTimeout(()=>{d=b(a).subscribe({next:c.next.bind(c),error:c.error.bind(c),complete:c.complete.bind(c)})},j),()=>{d&&d.unsubscribe()}})});return h.ApolloLink.from([j,i])};c.d(b,'createDefaultApolloClient',function(){return o}),c.d(b,'createIntrospectionFragmentMatcher',function(){return m}),c.d(b,'createMockLink',function(){return t})},function(a){a.exports=require('apollo-client')},function(a){a.exports=require('graphql-tag')},function(a){a.exports=require('apollo-link-schema')},function(a){a.exports=require('graphql-tools')}])});
//# sourceMappingURL=index.js.map