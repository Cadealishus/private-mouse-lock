# Private Mouse Lock

Reusable mouse-look blocks for Microsoft MakeCode Arcade.

## Use

1. Add this extension to an Arcade project.
2. Add an `on locked mouse move dx dy` block.
3. Apply `dx` to horizontal camera rotation and `dy` to vertical rotation.
4. Click the simulator to enable mouse look, or use `set mouse lock ON`.
5. Use `toggle mouse lock` for an M-key or menu toggle.

The extension hides the cursor while enabled, filters large edge jumps, resets when the pointer leaves the simulator, and exposes sensitivity controls.

This is the strongest mouse capture available to normal MakeCode extensions; browser-level pointer lock is not exposed to project extensions.

for PXT/arcade



> Open this page at [https://cadealishus.github.io/private-mouse-lock/](https://cadealishus.github.io/private-mouse-lock/)

## Use as Extension

This repository can be added as an **extension** in MakeCode.

* open [https://arcade.makecode.com/](https://arcade.makecode.com/)
* click on **New Project**
* click on **Extensions** under the gearwheel menu
* search for **https://github.com/cadealishus/private-mouse-lock** and import

## Edit this project

To edit this repository in MakeCode.

* open [https://arcade.makecode.com/](https://arcade.makecode.com/)
* click on **Import** then click on **Import URL**
* paste **https://github.com/cadealishus/private-mouse-lock** and click import

#### Metadata (used for search, rendering)

* for PXT/arcade
<script src="https://makecode.com/gh-pages-embed.js"></script><script>makeCodeRender("{{ site.makecode.home_url }}", "{{ site.github.owner_name }}/{{ site.github.repository_name }}");</script>
