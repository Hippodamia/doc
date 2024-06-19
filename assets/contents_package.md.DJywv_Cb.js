import{_ as s,c as a,o as i,a4 as n}from"./chunks/framework.DpGEzsCt.js";const g=JSON.parse('{"title":"Package","description":"","frontmatter":{},"headers":[],"relativePath":"contents/package.md","filePath":"contents/package.md"}'),t={name:"contents/package.md"},e=n(`<h1 id="package" tabindex="-1">Package <a class="header-anchor" href="#package" aria-label="Permalink to &quot;Package&quot;">​</a></h1><p>由玩家编写的内容往往被称为一个组件包,包含了:</p><ul><li>组件(赛场/选手处理器)</li><li>组件内容(例如随机事件组件的事件内容)</li><li>各类效果</li></ul><h2 id="manifest-json" tabindex="-1">manifest.json <a class="header-anchor" href="#manifest-json" aria-label="Permalink to &quot;manifest.json&quot;">​</a></h2><p>组件包的配置文件,包含了组件包的基本信息,例如名称、版本、作者、描述、依赖等。</p><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;name&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;MyPackage&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;version&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;1.0.0&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;author&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Heer&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;description&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;This is a package for my components.&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;dependencies&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;@hippodamia/core&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;^1.0.3&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p><code>dependencies.@hippodamia/core</code>决定了core的版本,在小版本即第二位版本号不变的情况下,允许向下兼容</p>`,7),p=[e];function h(l,k,o,r,c,d){return i(),a("div",null,p)}const u=s(t,[["render",h]]);export{g as __pageData,u as default};