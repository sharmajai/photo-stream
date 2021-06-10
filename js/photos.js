(function(html) {
const id = document.currentScript.getAttribute('data-photo-id');
const url = document.currentScript.getAttribute('data-photo-url');
const target = document.currentScript.getAttribute('data-target-id');
const container = document.querySelector(`#${target}`);
container.innerHTML = html;
openPhoto(id, url);
lazyload();
})(`
<li class="item " id="img-20210531-wa0024" style="background-image: url('/photos/tint/IMG-20210531-WA0024-65ba1d.jpeg')" title="IMG-20210531-WA0024">
  <img class="lazyload" data-src="/photos/thumbnail/IMG-20210531-WA0024-ccf4df.jpeg" src="/photos/tint/IMG-20210531-WA0024-65ba1d.jpeg" height="2160" width="3840" />
  <span class="full">
    <span style="background-image: url('/photos/large/IMG-20210531-WA0024-686656.jpeg')"></span>
  </span>
  <a class="open" href="/img-20210531-wa0024" data-target="img-20210531-wa0024">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/img-20210531-wa0018" data-target="img-20210531-wa0018" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <!-- <ul class="meta">
    <li>ONEPLUS A6000</li>
    <li>1/17</li>
    <li><span class="aperture"><em>f</em>/</span>1.7</li>
	</ul> -->
</li>
<li class="item " id="img-20210531-wa0018" style="background-image: url('/photos/tint/IMG-20210531-WA0018-65ba1d.jpeg')" title="IMG-20210531-WA0018">
  <img class="lazyload" data-src="/photos/thumbnail/IMG-20210531-WA0018-ccf4df.jpeg" src="/photos/tint/IMG-20210531-WA0018-65ba1d.jpeg" height="2160" width="3840" />
  <span class="full">
    <span style="background-image: url('/photos/large/IMG-20210531-WA0018-686656.jpeg')"></span>
  </span>
  <a class="open" href="/img-20210531-wa0018" data-target="img-20210531-wa0018">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/img-20210531-wa0024" data-target="img-20210531-wa0024" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/img-20210531-154533" data-target="img-20210531-154533" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <!-- <ul class="meta">
    <li>ONEPLUS A6000</li>
    <li>1/17</li>
    <li><span class="aperture"><em>f</em>/</span>1.7</li>
	</ul> -->
</li>
<li class="item " id="img-20210531-154533" style="background-image: url('/photos/tint/IMG_20210531_154533-65ba1d.jpg')" title="IMG_20210531_154533">
  <img class="lazyload" data-src="/photos/thumbnail/IMG_20210531_154533-ccf4df.jpg" src="/photos/tint/IMG_20210531_154533-65ba1d.jpg" height="2176" width="4608" />
  <span class="full">
    <span style="background-image: url('/photos/large/IMG_20210531_154533-686656.jpg')"></span>
  </span>
  <a class="open" href="/img-20210531-154533" data-target="img-20210531-154533">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/img-20210531-wa0018" data-target="img-20210531-wa0018" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/img-20210531-154119" data-target="img-20210531-154119" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <!-- <ul class="meta">
    <li>ONEPLUS A6000</li>
    <li>1/10</li>
    <li><span class="aperture"><em>f</em>/</span>1.7</li>
	</ul> -->
</li>
<li class="item " id="img-20210531-154119" style="background-image: url('/photos/tint/IMG_20210531_154119-65ba1d.jpg')" title="IMG_20210531_154119">
  <img class="lazyload" data-src="/photos/thumbnail/IMG_20210531_154119-ccf4df.jpg" src="/photos/tint/IMG_20210531_154119-65ba1d.jpg" height="2176" width="4608" />
  <span class="full">
    <span style="background-image: url('/photos/large/IMG_20210531_154119-686656.jpg')"></span>
  </span>
  <a class="open" href="/img-20210531-154119" data-target="img-20210531-154119">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/img-20210531-154533" data-target="img-20210531-154533" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/img-20210531-154048" data-target="img-20210531-154048" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <!-- <ul class="meta">
    <li>ONEPLUS A6000</li>
    <li>1/14</li>
    <li><span class="aperture"><em>f</em>/</span>1.7</li>
	</ul> -->
</li>
<li class="item " id="img-20210531-154048" style="background-image: url('/photos/tint/IMG_20210531_154048-65ba1d.jpg')" title="IMG_20210531_154048">
  <img class="lazyload" data-src="/photos/thumbnail/IMG_20210531_154048-ccf4df.jpg" src="/photos/tint/IMG_20210531_154048-65ba1d.jpg" height="2176" width="4608" />
  <span class="full">
    <span style="background-image: url('/photos/large/IMG_20210531_154048-686656.jpg')"></span>
  </span>
  <a class="open" href="/img-20210531-154048" data-target="img-20210531-154048">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/img-20210531-154119" data-target="img-20210531-154119" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/img-20210531-153817-01" data-target="img-20210531-153817-01" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <!-- <ul class="meta">
    <li>ONEPLUS A6000</li>
    <li>1/17</li>
    <li><span class="aperture"><em>f</em>/</span>1.7</li>
	</ul> -->
</li>
<li class="item " id="img-20210531-153817-01" style="background-image: url('/photos/tint/IMG_20210531_153817__01-65ba1d.jpg')" title="IMG_20210531_153817__01">
  <img class="lazyload" data-src="/photos/thumbnail/IMG_20210531_153817__01-ccf4df.jpg" src="/photos/tint/IMG_20210531_153817__01-65ba1d.jpg" height="3520" width="2123" />
  <span class="full">
    <span style="background-image: url('/photos/large/IMG_20210531_153817__01-686656.jpg')"></span>
  </span>
  <a class="open" href="/img-20210531-153817-01" data-target="img-20210531-153817-01">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/img-20210531-154048" data-target="img-20210531-154048" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/img-20210531-153817" data-target="img-20210531-153817" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <!-- <ul class="meta">
    <li>ONEPLUS A6000</li>
    <li>1/17</li>
    <li><span class="aperture"><em>f</em>/</span>1.7</li>
	</ul> -->
</li>
<li class="item " id="img-20210531-153817" style="background-image: url('/photos/tint/IMG_20210531_153817-65ba1d.jpg')" title="IMG_20210531_153817">
  <img class="lazyload" data-src="/photos/thumbnail/IMG_20210531_153817-ccf4df.jpg" src="/photos/tint/IMG_20210531_153817-65ba1d.jpg" height="2176" width="4608" />
  <span class="full">
    <span style="background-image: url('/photos/large/IMG_20210531_153817-686656.jpg')"></span>
  </span>
  <a class="open" href="/img-20210531-153817" data-target="img-20210531-153817">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/img-20210531-153817-01" data-target="img-20210531-153817-01" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/img-20210531-153741" data-target="img-20210531-153741" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <!-- <ul class="meta">
    <li>ONEPLUS A6000</li>
    <li>1/17</li>
    <li><span class="aperture"><em>f</em>/</span>1.7</li>
	</ul> -->
</li>
<li class="item " id="img-20210531-153741" style="background-image: url('/photos/tint/IMG_20210531_153741-65ba1d.jpg')" title="IMG_20210531_153741">
  <img class="lazyload" data-src="/photos/thumbnail/IMG_20210531_153741-ccf4df.jpg" src="/photos/tint/IMG_20210531_153741-65ba1d.jpg" height="2176" width="4608" />
  <span class="full">
    <span style="background-image: url('/photos/large/IMG_20210531_153741-686656.jpg')"></span>
  </span>
  <a class="open" href="/img-20210531-153741" data-target="img-20210531-153741">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/img-20210531-153817" data-target="img-20210531-153817" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/img-20210531-153730" data-target="img-20210531-153730" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <!-- <ul class="meta">
    <li>ONEPLUS A6000</li>
    <li>1/17</li>
    <li><span class="aperture"><em>f</em>/</span>1.7</li>
	</ul> -->
</li>
<li class="item " id="img-20210531-153730" style="background-image: url('/photos/tint/IMG_20210531_153730-65ba1d.jpg')" title="IMG_20210531_153730">
  <img class="lazyload" data-src="/photos/thumbnail/IMG_20210531_153730-ccf4df.jpg" src="/photos/tint/IMG_20210531_153730-65ba1d.jpg" height="2176" width="4608" />
  <span class="full">
    <span style="background-image: url('/photos/large/IMG_20210531_153730-686656.jpg')"></span>
  </span>
  <a class="open" href="/img-20210531-153730" data-target="img-20210531-153730">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/img-20210531-153741" data-target="img-20210531-153741" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/img-20210531-153712-01" data-target="img-20210531-153712-01" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <!-- <ul class="meta">
    <li>ONEPLUS A6000</li>
    <li>1/17</li>
    <li><span class="aperture"><em>f</em>/</span>1.7</li>
	</ul> -->
</li>
<li class="item " id="img-20210531-153712-01" style="background-image: url('/photos/tint/IMG_20210531_153712__01-65ba1d.jpg')" title="IMG_20210531_153712__01">
  <img class="lazyload" data-src="/photos/thumbnail/IMG_20210531_153712__01-ccf4df.jpg" src="/photos/tint/IMG_20210531_153712__01-65ba1d.jpg" height="2176" width="3500" />
  <span class="full">
    <span style="background-image: url('/photos/large/IMG_20210531_153712__01-686656.jpg')"></span>
  </span>
  <a class="open" href="/img-20210531-153712-01" data-target="img-20210531-153712-01">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/img-20210531-153730" data-target="img-20210531-153730" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/img-20210531-153551-01" data-target="img-20210531-153551-01" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <!-- <ul class="meta">
    <li>ONEPLUS A6000</li>
    <li>1/17</li>
    <li><span class="aperture"><em>f</em>/</span>1.7</li>
	</ul> -->
</li>
<li class="item " id="img-20210531-153551-01" style="background-image: url('/photos/tint/IMG_20210531_153551__01-65ba1d.jpg')" title="IMG_20210531_153551__01">
  <img class="lazyload" data-src="/photos/thumbnail/IMG_20210531_153551__01-ccf4df.jpg" src="/photos/tint/IMG_20210531_153551__01-65ba1d.jpg" height="2176" width="3576" />
  <span class="full">
    <span style="background-image: url('/photos/large/IMG_20210531_153551__01-686656.jpg')"></span>
  </span>
  <a class="open" href="/img-20210531-153551-01" data-target="img-20210531-153551-01">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/img-20210531-153712-01" data-target="img-20210531-153712-01" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <!-- <ul class="meta">
    <li>ONEPLUS A6000</li>
    <li>1/17</li>
    <li><span class="aperture"><em>f</em>/</span>1.7</li>
	</ul> -->
</li>
`);