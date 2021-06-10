(function(html) {
const id = document.currentScript.getAttribute('data-photo-id');
const url = document.currentScript.getAttribute('data-photo-url');
const target = document.currentScript.getAttribute('data-target-id');
const container = document.querySelector(`#${target}`);
container.innerHTML = html;
openPhoto(id, url);
lazyload();
})(`
<li class="item " id="48" style="background-image: url('/photos/tint/48-65ba1d.jpg')" title="48">
  <img class="lazyload" data-src="/photos/thumbnail/48-ccf4df.jpg" src="/photos/tint/48-65ba1d.jpg" height="1422" width="1080" />
  <span class="full">
    <span style="background-image: url('/photos/large/48-686656.jpg')"></span>
  </span>
  <a class="open" href="/48" data-target="48">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/31" data-target="31" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <!-- <ul class="meta">
    <li></li>
    <li></li>
    <li><span class="aperture"><em>f</em>/</span>0.0</li>
	</ul> -->
</li>
<li class="item " id="31" style="background-image: url('/photos/tint/31-65ba1d.jpg')" title="31">
  <img class="lazyload" data-src="/photos/thumbnail/31-ccf4df.jpg" src="/photos/tint/31-65ba1d.jpg" height="810" width="1080" />
  <span class="full">
    <span style="background-image: url('/photos/large/31-686656.jpg')"></span>
  </span>
  <a class="open" href="/31" data-target="31">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/48" data-target="48" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/11" data-target="11" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <!-- <ul class="meta">
    <li></li>
    <li></li>
    <li><span class="aperture"><em>f</em>/</span>0.0</li>
	</ul> -->
</li>
<li class="item " id="11" style="background-image: url('/photos/tint/11-65ba1d.jpg')" title="11">
  <img class="lazyload" data-src="/photos/thumbnail/11-ccf4df.jpg" src="/photos/tint/11-65ba1d.jpg" height="1426" width="1080" />
  <span class="full">
    <span style="background-image: url('/photos/large/11-686656.jpg')"></span>
  </span>
  <a class="open" href="/11" data-target="11">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/31" data-target="31" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/30" data-target="30" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <!-- <ul class="meta">
    <li></li>
    <li></li>
    <li><span class="aperture"><em>f</em>/</span>0.0</li>
	</ul> -->
</li>
<li class="item " id="30" style="background-image: url('/photos/tint/30-65ba1d.jpg')" title="30">
  <img class="lazyload" data-src="/photos/thumbnail/30-ccf4df.jpg" src="/photos/tint/30-65ba1d.jpg" height="1624" width="1080" />
  <span class="full">
    <span style="background-image: url('/photos/large/30-686656.jpg')"></span>
  </span>
  <a class="open" href="/30" data-target="30">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/11" data-target="11" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/20" data-target="20" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <!-- <ul class="meta">
    <li></li>
    <li></li>
    <li><span class="aperture"><em>f</em>/</span>0.0</li>
	</ul> -->
</li>
<li class="item " id="20" style="background-image: url('/photos/tint/20-65ba1d.jpg')" title="20">
  <img class="lazyload" data-src="/photos/thumbnail/20-ccf4df.jpg" src="/photos/tint/20-65ba1d.jpg" height="803" width="1080" />
  <span class="full">
    <span style="background-image: url('/photos/large/20-686656.jpg')"></span>
  </span>
  <a class="open" href="/20" data-target="20">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/30" data-target="30" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/29" data-target="29" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <!-- <ul class="meta">
    <li></li>
    <li></li>
    <li><span class="aperture"><em>f</em>/</span>0.0</li>
	</ul> -->
</li>
<li class="item " id="29" style="background-image: url('/photos/tint/29-65ba1d.jpg')" title="29">
  <img class="lazyload" data-src="/photos/thumbnail/29-ccf4df.jpg" src="/photos/tint/29-65ba1d.jpg" height="1437" width="1080" />
  <span class="full">
    <span style="background-image: url('/photos/large/29-686656.jpg')"></span>
  </span>
  <a class="open" href="/29" data-target="29">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/20" data-target="20" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/28" data-target="28" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <!-- <ul class="meta">
    <li></li>
    <li></li>
    <li><span class="aperture"><em>f</em>/</span>0.0</li>
	</ul> -->
</li>
<li class="item " id="28" style="background-image: url('/photos/tint/28-65ba1d.jpg')" title="28">
  <img class="lazyload" data-src="/photos/thumbnail/28-ccf4df.jpg" src="/photos/tint/28-65ba1d.jpg" height="806" width="1080" />
  <span class="full">
    <span style="background-image: url('/photos/large/28-686656.jpg')"></span>
  </span>
  <a class="open" href="/28" data-target="28">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/29" data-target="29" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/46" data-target="46" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <!-- <ul class="meta">
    <li></li>
    <li></li>
    <li><span class="aperture"><em>f</em>/</span>0.0</li>
	</ul> -->
</li>
<li class="item " id="46" style="background-image: url('/photos/tint/46-65ba1d.jpg')" title="46">
  <img class="lazyload" data-src="/photos/thumbnail/46-ccf4df.jpg" src="/photos/tint/46-65ba1d.jpg" height="804" width="1080" />
  <span class="full">
    <span style="background-image: url('/photos/large/46-686656.jpg')"></span>
  </span>
  <a class="open" href="/46" data-target="46">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/28" data-target="28" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/45" data-target="45" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <!-- <ul class="meta">
    <li></li>
    <li></li>
    <li><span class="aperture"><em>f</em>/</span>0.0</li>
	</ul> -->
</li>
<li class="item " id="45" style="background-image: url('/photos/tint/45-65ba1d.jpg')" title="45">
  <img class="lazyload" data-src="/photos/thumbnail/45-ccf4df.jpg" src="/photos/tint/45-65ba1d.jpg" height="720" width="1080" />
  <span class="full">
    <span style="background-image: url('/photos/large/45-686656.jpg')"></span>
  </span>
  <a class="open" href="/45" data-target="45">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/46" data-target="46" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/44" data-target="44" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <!-- <ul class="meta">
    <li></li>
    <li></li>
    <li><span class="aperture"><em>f</em>/</span>0.0</li>
	</ul> -->
</li>
<li class="item " id="44" style="background-image: url('/photos/tint/44-65ba1d.jpg')" title="44">
  <img class="lazyload" data-src="/photos/thumbnail/44-ccf4df.jpg" src="/photos/tint/44-65ba1d.jpg" height="1653" width="1080" />
  <span class="full">
    <span style="background-image: url('/photos/large/44-686656.jpg')"></span>
  </span>
  <a class="open" href="/44" data-target="44">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/45" data-target="45" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/43" data-target="43" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <!-- <ul class="meta">
    <li></li>
    <li></li>
    <li><span class="aperture"><em>f</em>/</span>0.0</li>
	</ul> -->
</li>
<li class="item " id="43" style="background-image: url('/photos/tint/43-65ba1d.jpg')" title="43">
  <img class="lazyload" data-src="/photos/thumbnail/43-ccf4df.jpg" src="/photos/tint/43-65ba1d.jpg" height="805" width="1080" />
  <span class="full">
    <span style="background-image: url('/photos/large/43-686656.jpg')"></span>
  </span>
  <a class="open" href="/43" data-target="43">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/44" data-target="44" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/42" data-target="42" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <!-- <ul class="meta">
    <li></li>
    <li></li>
    <li><span class="aperture"><em>f</em>/</span>0.0</li>
	</ul> -->
</li>
<li class="item " id="42" style="background-image: url('/photos/tint/42-65ba1d.jpg')" title="42">
  <img class="lazyload" data-src="/photos/thumbnail/42-ccf4df.jpg" src="/photos/tint/42-65ba1d.jpg" height="2149" width="1080" />
  <span class="full">
    <span style="background-image: url('/photos/large/42-686656.jpg')"></span>
  </span>
  <a class="open" href="/42" data-target="42">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/43" data-target="43" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/41" data-target="41" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <!-- <ul class="meta">
    <li></li>
    <li></li>
    <li><span class="aperture"><em>f</em>/</span>0.0</li>
	</ul> -->
</li>
<li class="item " id="41" style="background-image: url('/photos/tint/41-65ba1d.jpg')" title="41">
  <img class="lazyload" data-src="/photos/thumbnail/41-ccf4df.jpg" src="/photos/tint/41-65ba1d.jpg" height="1429" width="1080" />
  <span class="full">
    <span style="background-image: url('/photos/large/41-686656.jpg')"></span>
  </span>
  <a class="open" href="/41" data-target="41">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/42" data-target="42" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/40" data-target="40" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <!-- <ul class="meta">
    <li></li>
    <li></li>
    <li><span class="aperture"><em>f</em>/</span>0.0</li>
	</ul> -->
</li>
<li class="item " id="40" style="background-image: url('/photos/tint/40-65ba1d.jpg')" title="40">
  <img class="lazyload" data-src="/photos/thumbnail/40-ccf4df.jpg" src="/photos/tint/40-65ba1d.jpg" height="801" width="1080" />
  <span class="full">
    <span style="background-image: url('/photos/large/40-686656.jpg')"></span>
  </span>
  <a class="open" href="/40" data-target="40">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/41" data-target="41" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/14" data-target="14" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <!-- <ul class="meta">
    <li></li>
    <li></li>
    <li><span class="aperture"><em>f</em>/</span>0.0</li>
	</ul> -->
</li>
<li class="item " id="14" style="background-image: url('/photos/tint/14-65ba1d.jpg')" title="14">
  <img class="lazyload" data-src="/photos/thumbnail/14-ccf4df.jpg" src="/photos/tint/14-65ba1d.jpg" height="807" width="1080" />
  <span class="full">
    <span style="background-image: url('/photos/large/14-686656.jpg')"></span>
  </span>
  <a class="open" href="/14" data-target="14">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/40" data-target="40" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/15" data-target="15" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <!-- <ul class="meta">
    <li></li>
    <li></li>
    <li><span class="aperture"><em>f</em>/</span>0.0</li>
	</ul> -->
</li>
<li class="item " id="15" style="background-image: url('/photos/tint/15-65ba1d.jpg')" title="15">
  <img class="lazyload" data-src="/photos/thumbnail/15-ccf4df.jpg" src="/photos/tint/15-65ba1d.jpg" height="811" width="1080" />
  <span class="full">
    <span style="background-image: url('/photos/large/15-686656.jpg')"></span>
  </span>
  <a class="open" href="/15" data-target="15">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/14" data-target="14" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/25" data-target="25" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <!-- <ul class="meta">
    <li></li>
    <li></li>
    <li><span class="aperture"><em>f</em>/</span>0.0</li>
	</ul> -->
</li>
<li class="item " id="25" style="background-image: url('/photos/tint/25-65ba1d.jpg')" title="25">
  <img class="lazyload" data-src="/photos/thumbnail/25-ccf4df.jpg" src="/photos/tint/25-65ba1d.jpg" height="708" width="1080" />
  <span class="full">
    <span style="background-image: url('/photos/large/25-686656.jpg')"></span>
  </span>
  <a class="open" href="/25" data-target="25">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/15" data-target="15" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/24" data-target="24" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <!-- <ul class="meta">
    <li></li>
    <li></li>
    <li><span class="aperture"><em>f</em>/</span>0.0</li>
	</ul> -->
</li>
<li class="item " id="24" style="background-image: url('/photos/tint/24-65ba1d.jpg')" title="24">
  <img class="lazyload" data-src="/photos/thumbnail/24-ccf4df.jpg" src="/photos/tint/24-65ba1d.jpg" height="1435" width="1080" />
  <span class="full">
    <span style="background-image: url('/photos/large/24-686656.jpg')"></span>
  </span>
  <a class="open" href="/24" data-target="24">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/25" data-target="25" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/13" data-target="13" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <!-- <ul class="meta">
    <li></li>
    <li></li>
    <li><span class="aperture"><em>f</em>/</span>0.0</li>
	</ul> -->
</li>
<li class="item " id="13" style="background-image: url('/photos/tint/13-65ba1d.jpg')" title="13">
  <img class="lazyload" data-src="/photos/thumbnail/13-ccf4df.jpg" src="/photos/tint/13-65ba1d.jpg" height="1437" width="1080" />
  <span class="full">
    <span style="background-image: url('/photos/large/13-686656.jpg')"></span>
  </span>
  <a class="open" href="/13" data-target="13">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/24" data-target="24" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/12" data-target="12" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <!-- <ul class="meta">
    <li></li>
    <li></li>
    <li><span class="aperture"><em>f</em>/</span>0.0</li>
	</ul> -->
</li>
<li class="item " id="12" style="background-image: url('/photos/tint/12-65ba1d.jpg')" title="12">
  <img class="lazyload" data-src="/photos/thumbnail/12-ccf4df.jpg" src="/photos/tint/12-65ba1d.jpg" height="709" width="1080" />
  <span class="full">
    <span style="background-image: url('/photos/large/12-686656.jpg')"></span>
  </span>
  <a class="open" href="/12" data-target="12">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/13" data-target="13" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/23" data-target="23" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <!-- <ul class="meta">
    <li></li>
    <li></li>
    <li><span class="aperture"><em>f</em>/</span>0.0</li>
	</ul> -->
</li>
<li class="item " id="23" style="background-image: url('/photos/tint/23-65ba1d.jpg')" title="23">
  <img class="lazyload" data-src="/photos/thumbnail/23-ccf4df.jpg" src="/photos/tint/23-65ba1d.jpg" height="1434" width="1080" />
  <span class="full">
    <span style="background-image: url('/photos/large/23-686656.jpg')"></span>
  </span>
  <a class="open" href="/23" data-target="23">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/12" data-target="12" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/22" data-target="22" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <!-- <ul class="meta">
    <li></li>
    <li></li>
    <li><span class="aperture"><em>f</em>/</span>0.0</li>
	</ul> -->
</li>
<li class="item " id="22" style="background-image: url('/photos/tint/22-65ba1d.jpg')" title="22">
  <img class="lazyload" data-src="/photos/thumbnail/22-ccf4df.jpg" src="/photos/tint/22-65ba1d.jpg" height="608" width="1080" />
  <span class="full">
    <span style="background-image: url('/photos/large/22-686656.jpg')"></span>
  </span>
  <a class="open" href="/22" data-target="22">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/23" data-target="23" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/39" data-target="39" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <!-- <ul class="meta">
    <li></li>
    <li></li>
    <li><span class="aperture"><em>f</em>/</span>0.0</li>
	</ul> -->
</li>
<li class="item " id="39" style="background-image: url('/photos/tint/39-65ba1d.jpg')" title="39">
  <img class="lazyload" data-src="/photos/thumbnail/39-ccf4df.jpg" src="/photos/tint/39-65ba1d.jpg" height="1614" width="1080" />
  <span class="full">
    <span style="background-image: url('/photos/large/39-686656.jpg')"></span>
  </span>
  <a class="open" href="/39" data-target="39">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/22" data-target="22" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/38" data-target="38" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <!-- <ul class="meta">
    <li></li>
    <li></li>
    <li><span class="aperture"><em>f</em>/</span>0.0</li>
	</ul> -->
</li>
<li class="item " id="38" style="background-image: url('/photos/tint/38-65ba1d.jpg')" title="38">
  <img class="lazyload" data-src="/photos/thumbnail/38-ccf4df.jpg" src="/photos/tint/38-65ba1d.jpg" height="1431" width="1080" />
  <span class="full">
    <span style="background-image: url('/photos/large/38-686656.jpg')"></span>
  </span>
  <a class="open" href="/38" data-target="38">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/39" data-target="39" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/37" data-target="37" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <!-- <ul class="meta">
    <li></li>
    <li></li>
    <li><span class="aperture"><em>f</em>/</span>0.0</li>
	</ul> -->
</li>
<li class="item " id="37" style="background-image: url('/photos/tint/37-65ba1d.jpg')" title="37">
  <img class="lazyload" data-src="/photos/thumbnail/37-ccf4df.jpg" src="/photos/tint/37-65ba1d.jpg" height="1437" width="1080" />
  <span class="full">
    <span style="background-image: url('/photos/large/37-686656.jpg')"></span>
  </span>
  <a class="open" href="/37" data-target="37">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/38" data-target="38" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/36" data-target="36" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <!-- <ul class="meta">
    <li></li>
    <li></li>
    <li><span class="aperture"><em>f</em>/</span>0.0</li>
	</ul> -->
</li>
<li class="item " id="36" style="background-image: url('/photos/tint/36-65ba1d.jpg')" title="36">
  <img class="lazyload" data-src="/photos/thumbnail/36-ccf4df.jpg" src="/photos/tint/36-65ba1d.jpg" height="1615" width="1080" />
  <span class="full">
    <span style="background-image: url('/photos/large/36-686656.jpg')"></span>
  </span>
  <a class="open" href="/36" data-target="36">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/37" data-target="37" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/35" data-target="35" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <!-- <ul class="meta">
    <li></li>
    <li></li>
    <li><span class="aperture"><em>f</em>/</span>0.0</li>
	</ul> -->
</li>
<li class="item " id="35" style="background-image: url('/photos/tint/35-65ba1d.jpg')" title="35">
  <img class="lazyload" data-src="/photos/thumbnail/35-ccf4df.jpg" src="/photos/tint/35-65ba1d.jpg" height="808" width="1080" />
  <span class="full">
    <span style="background-image: url('/photos/large/35-686656.jpg')"></span>
  </span>
  <a class="open" href="/35" data-target="35">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/36" data-target="36" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/34" data-target="34" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <!-- <ul class="meta">
    <li></li>
    <li></li>
    <li><span class="aperture"><em>f</em>/</span>0.0</li>
	</ul> -->
</li>
<li class="item " id="34" style="background-image: url('/photos/tint/34-65ba1d.jpg')" title="34">
  <img class="lazyload" data-src="/photos/thumbnail/34-ccf4df.jpg" src="/photos/tint/34-65ba1d.jpg" height="1440" width="1080" />
  <span class="full">
    <span style="background-image: url('/photos/large/34-686656.jpg')"></span>
  </span>
  <a class="open" href="/34" data-target="34">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/35" data-target="35" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/21" data-target="21" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <!-- <ul class="meta">
    <li></li>
    <li></li>
    <li><span class="aperture"><em>f</em>/</span>0.0</li>
	</ul> -->
</li>
<li class="item " id="21" style="background-image: url('/photos/tint/21-65ba1d.jpg')" title="21">
  <img class="lazyload" data-src="/photos/thumbnail/21-ccf4df.jpg" src="/photos/tint/21-65ba1d.jpg" height="1440" width="1080" />
  <span class="full">
    <span style="background-image: url('/photos/large/21-686656.jpg')"></span>
  </span>
  <a class="open" href="/21" data-target="21">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/34" data-target="34" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/33" data-target="33" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <!-- <ul class="meta">
    <li></li>
    <li></li>
    <li><span class="aperture"><em>f</em>/</span>0.0</li>
	</ul> -->
</li>
<li class="item " id="33" style="background-image: url('/photos/tint/33-65ba1d.jpg')" title="33">
  <img class="lazyload" data-src="/photos/thumbnail/33-ccf4df.jpg" src="/photos/tint/33-65ba1d.jpg" height="805" width="1080" />
  <span class="full">
    <span style="background-image: url('/photos/large/33-686656.jpg')"></span>
  </span>
  <a class="open" href="/33" data-target="33">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/21" data-target="21" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/07" data-target="07" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <!-- <ul class="meta">
    <li></li>
    <li></li>
    <li><span class="aperture"><em>f</em>/</span>0.0</li>
	</ul> -->
</li>
<li class="item " id="07" style="background-image: url('/photos/tint/07-65ba1d.jpeg')" title="07">
  <img class="lazyload" data-src="/photos/thumbnail/07-ccf4df.jpeg" src="/photos/tint/07-65ba1d.jpeg" height="3572" width="2159" />
  <span class="full">
    <span style="background-image: url('/photos/large/07-686656.jpeg')"></span>
  </span>
  <a class="open" href="/07" data-target="07">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/33" data-target="33" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/09" data-target="09" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <!-- <ul class="meta">
    <li>ONEPLUS A6000</li>
    <li>1/17</li>
    <li><span class="aperture"><em>f</em>/</span>1.7</li>
	</ul> -->
</li>
<li class="item " id="09" style="background-image: url('/photos/tint/09-65ba1d.jpeg')" title="09">
  <img class="lazyload" data-src="/photos/thumbnail/09-ccf4df.jpeg" src="/photos/tint/09-65ba1d.jpeg" height="2093" width="3678" />
  <span class="full">
    <span style="background-image: url('/photos/large/09-686656.jpeg')"></span>
  </span>
  <a class="open" href="/09" data-target="09">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/07" data-target="07" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/10" data-target="10" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <!-- <ul class="meta">
    <li>ONEPLUS A6000</li>
    <li>1/17</li>
    <li><span class="aperture"><em>f</em>/</span>1.7</li>
	</ul> -->
</li>
<li class="item " id="10" style="background-image: url('/photos/tint/10-65ba1d.jpg')" title="10">
  <img class="lazyload" data-src="/photos/thumbnail/10-ccf4df.jpg" src="/photos/tint/10-65ba1d.jpg" height="2064" width="3054" />
  <span class="full">
    <span style="background-image: url('/photos/large/10-686656.jpg')"></span>
  </span>
  <a class="open" href="/10" data-target="10">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/09" data-target="09" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/08" data-target="08" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <!-- <ul class="meta">
    <li>ONEPLUS A6000</li>
    <li>1/10</li>
    <li><span class="aperture"><em>f</em>/</span>1.7</li>
	</ul> -->
</li>
<li class="item " id="08" style="background-image: url('/photos/tint/08-65ba1d.jpg')" title="08">
  <img class="lazyload" data-src="/photos/thumbnail/08-ccf4df.jpg" src="/photos/tint/08-65ba1d.jpg" height="2145" width="3919" />
  <span class="full">
    <span style="background-image: url('/photos/large/08-686656.jpg')"></span>
  </span>
  <a class="open" href="/08" data-target="08">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/10" data-target="10" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/04" data-target="04" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <!-- <ul class="meta">
    <li>ONEPLUS A6000</li>
    <li>1/17</li>
    <li><span class="aperture"><em>f</em>/</span>1.7</li>
	</ul> -->
</li>
<li class="item " id="04" style="background-image: url('/photos/tint/04-65ba1d.jpg')" title="04">
  <img class="lazyload" data-src="/photos/thumbnail/04-ccf4df.jpg" src="/photos/tint/04-65ba1d.jpg" height="2175" width="3207" />
  <span class="full">
    <span style="background-image: url('/photos/large/04-686656.jpg')"></span>
  </span>
  <a class="open" href="/04" data-target="04">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/08" data-target="08" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/05" data-target="05" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <!-- <ul class="meta">
    <li>ONEPLUS A6000</li>
    <li>1/17</li>
    <li><span class="aperture"><em>f</em>/</span>1.7</li>
	</ul> -->
</li>
<li class="item " id="05" style="background-image: url('/photos/tint/05-65ba1d.jpg')" title="05">
  <img class="lazyload" data-src="/photos/thumbnail/05-ccf4df.jpg" src="/photos/tint/05-65ba1d.jpg" height="3118" width="2176" />
  <span class="full">
    <span style="background-image: url('/photos/large/05-686656.jpg')"></span>
  </span>
  <a class="open" href="/05" data-target="05">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/04" data-target="04" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/01" data-target="01" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <!-- <ul class="meta">
    <li>ONEPLUS A6000</li>
    <li>1/17</li>
    <li><span class="aperture"><em>f</em>/</span>1.7</li>
	</ul> -->
</li>
<li class="item " id="01" style="background-image: url('/photos/tint/01-65ba1d.jpg')" title="01">
  <img class="lazyload" data-src="/photos/thumbnail/01-ccf4df.jpg" src="/photos/tint/01-65ba1d.jpg" height="2176" width="4608" />
  <span class="full">
    <span style="background-image: url('/photos/large/01-686656.jpg')"></span>
  </span>
  <a class="open" href="/01" data-target="01">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/05" data-target="05" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/02" data-target="02" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <!-- <ul class="meta">
    <li>ONEPLUS A6000</li>
    <li>1/14</li>
    <li><span class="aperture"><em>f</em>/</span>1.7</li>
	</ul> -->
</li>
<li class="item " id="02" style="background-image: url('/photos/tint/02-65ba1d.jpg')" title="02">
  <img class="lazyload" data-src="/photos/thumbnail/02-ccf4df.jpg" src="/photos/tint/02-65ba1d.jpg" height="3520" width="2123" />
  <span class="full">
    <span style="background-image: url('/photos/large/02-686656.jpg')"></span>
  </span>
  <a class="open" href="/02" data-target="02">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/01" data-target="01" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/06" data-target="06" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <!-- <ul class="meta">
    <li>ONEPLUS A6000</li>
    <li>1/17</li>
    <li><span class="aperture"><em>f</em>/</span>1.7</li>
	</ul> -->
</li>
<li class="item " id="06" style="background-image: url('/photos/tint/06-65ba1d.jpg')" title="06">
  <img class="lazyload" data-src="/photos/thumbnail/06-ccf4df.jpg" src="/photos/tint/06-65ba1d.jpg" height="2176" width="3500" />
  <span class="full">
    <span style="background-image: url('/photos/large/06-686656.jpg')"></span>
  </span>
  <a class="open" href="/06" data-target="06">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/02" data-target="02" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/03" data-target="03" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <!-- <ul class="meta">
    <li>ONEPLUS A6000</li>
    <li>1/17</li>
    <li><span class="aperture"><em>f</em>/</span>1.7</li>
	</ul> -->
</li>
<li class="item " id="03" style="background-image: url('/photos/tint/03-65ba1d.jpg')" title="03">
  <img class="lazyload" data-src="/photos/thumbnail/03-ccf4df.jpg" src="/photos/tint/03-65ba1d.jpg" height="2176" width="3576" />
  <span class="full">
    <span style="background-image: url('/photos/large/03-686656.jpg')"></span>
  </span>
  <a class="open" href="/03" data-target="03">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/06" data-target="06" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/47" data-target="47" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <!-- <ul class="meta">
    <li>ONEPLUS A6000</li>
    <li>1/17</li>
    <li><span class="aperture"><em>f</em>/</span>1.7</li>
	</ul> -->
</li>
<li class="item " id="47" style="background-image: url('/photos/tint/47-65ba1d.jpg')" title="47">
  <img class="lazyload" data-src="/photos/thumbnail/47-ccf4df.jpg" src="/photos/tint/47-65ba1d.jpg" height="2280" width="1080" />
  <span class="full">
    <span style="background-image: url('/photos/large/47-686656.jpg')"></span>
  </span>
  <a class="open" href="/47" data-target="47">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/03" data-target="03" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/32" data-target="32" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <!-- <ul class="meta">
    <li></li>
    <li></li>
    <li><span class="aperture"><em>f</em>/</span>0.0</li>
	</ul> -->
</li>
<li class="item " id="32" style="background-image: url('/photos/tint/32-65ba1d.jpg')" title="32">
  <img class="lazyload" data-src="/photos/thumbnail/32-ccf4df.jpg" src="/photos/tint/32-65ba1d.jpg" height="2280" width="1080" />
  <span class="full">
    <span style="background-image: url('/photos/large/32-686656.jpg')"></span>
  </span>
  <a class="open" href="/32" data-target="32">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/47" data-target="47" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/27" data-target="27" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <!-- <ul class="meta">
    <li></li>
    <li></li>
    <li><span class="aperture"><em>f</em>/</span>0.0</li>
	</ul> -->
</li>
<li class="item " id="27" style="background-image: url('/photos/tint/27-65ba1d.jpg')" title="27">
  <img class="lazyload" data-src="/photos/thumbnail/27-ccf4df.jpg" src="/photos/tint/27-65ba1d.jpg" height="1412" width="1080" />
  <span class="full">
    <span style="background-image: url('/photos/large/27-686656.jpg')"></span>
  </span>
  <a class="open" href="/27" data-target="27">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/32" data-target="32" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/26" data-target="26" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <!-- <ul class="meta">
    <li></li>
    <li></li>
    <li><span class="aperture"><em>f</em>/</span>0.0</li>
	</ul> -->
</li>
<li class="item " id="26" style="background-image: url('/photos/tint/26-65ba1d.jpg')" title="26">
  <img class="lazyload" data-src="/photos/thumbnail/26-ccf4df.jpg" src="/photos/tint/26-65ba1d.jpg" height="1438" width="1080" />
  <span class="full">
    <span style="background-image: url('/photos/large/26-686656.jpg')"></span>
  </span>
  <a class="open" href="/26" data-target="26">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/27" data-target="27" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/19" data-target="19" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <!-- <ul class="meta">
    <li></li>
    <li></li>
    <li><span class="aperture"><em>f</em>/</span>0.0</li>
	</ul> -->
</li>
<li class="item " id="19" style="background-image: url('/photos/tint/19-65ba1d.jpg')" title="19">
  <img class="lazyload" data-src="/photos/thumbnail/19-ccf4df.jpg" src="/photos/tint/19-65ba1d.jpg" height="887" width="1334" />
  <span class="full">
    <span style="background-image: url('/photos/large/19-686656.jpg')"></span>
  </span>
  <a class="open" href="/19" data-target="19">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/26" data-target="26" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/18" data-target="18" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <!-- <ul class="meta">
    <li></li>
    <li></li>
    <li><span class="aperture"><em>f</em>/</span>0.0</li>
	</ul> -->
</li>
<li class="item " id="18" style="background-image: url('/photos/tint/18-65ba1d.jpg')" title="18">
  <img class="lazyload" data-src="/photos/thumbnail/18-ccf4df.jpg" src="/photos/tint/18-65ba1d.jpg" height="887" width="1334" />
  <span class="full">
    <span style="background-image: url('/photos/large/18-686656.jpg')"></span>
  </span>
  <a class="open" href="/18" data-target="18">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/19" data-target="19" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/17" data-target="17" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <!-- <ul class="meta">
    <li></li>
    <li></li>
    <li><span class="aperture"><em>f</em>/</span>0.0</li>
	</ul> -->
</li>
<li class="item " id="17" style="background-image: url('/photos/tint/17-65ba1d.jpg')" title="17">
  <img class="lazyload" data-src="/photos/thumbnail/17-ccf4df.jpg" src="/photos/tint/17-65ba1d.jpg" height="887" width="1334" />
  <span class="full">
    <span style="background-image: url('/photos/large/17-686656.jpg')"></span>
  </span>
  <a class="open" href="/17" data-target="17">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/18" data-target="18" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/16" data-target="16" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <!-- <ul class="meta">
    <li></li>
    <li></li>
    <li><span class="aperture"><em>f</em>/</span>0.0</li>
	</ul> -->
</li>
<li class="item " id="16" style="background-image: url('/photos/tint/16-65ba1d.jpg')" title="16">
  <img class="lazyload" data-src="/photos/thumbnail/16-ccf4df.jpg" src="/photos/tint/16-65ba1d.jpg" height="887" width="1334" />
  <span class="full">
    <span style="background-image: url('/photos/large/16-686656.jpg')"></span>
  </span>
  <a class="open" href="/16" data-target="16">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/17" data-target="17" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <!-- <ul class="meta">
    <li></li>
    <li></li>
    <li><span class="aperture"><em>f</em>/</span>0.0</li>
	</ul> -->
</li>
`);