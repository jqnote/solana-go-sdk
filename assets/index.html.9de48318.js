import{_ as e,e as a}from"./app.df2b1555.js";const n={},c=a('<h1 id="durable-nonce" tabindex="-1"><a class="header-anchor" href="#durable-nonce" aria-hidden="true">#</a> Durable Nonce</h1><p>A transaction includes a recent blockhash. The recent blockhash will expire after 150 blocks. (arpox. 2 min) To get rid of it, you can use durable nonce.</p><h2 id="mechanism" tabindex="-1"><a class="header-anchor" href="#mechanism" aria-hidden="true">#</a> Mechanism</h2><p>We can trigger the mechanism by</p><ol><li>use the <code>nonce</code> which stored in a nonce account as a recent blockhash</li><li>make <code>nonce advance</code> instruction is the first instruciton</li></ol>',5);function r(i,o){return c}var h=e(n,[["render",r]]);export{h as default};
