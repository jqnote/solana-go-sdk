import{_ as n,e as s}from"./app.df2b1555.js";const a={},t=s(`<h1 id="token-transfer" tabindex="-1"><a class="header-anchor" href="#token-transfer" aria-hidden="true">#</a> Token Transfer</h1><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;context&quot;</span>
	<span class="token string">&quot;log&quot;</span>

	<span class="token string">&quot;github.com/portto/solana-go-sdk/client&quot;</span>
	<span class="token string">&quot;github.com/portto/solana-go-sdk/common&quot;</span>
	<span class="token string">&quot;github.com/portto/solana-go-sdk/program/tokenprog&quot;</span>
	<span class="token string">&quot;github.com/portto/solana-go-sdk/rpc&quot;</span>
	<span class="token string">&quot;github.com/portto/solana-go-sdk/types&quot;</span>
<span class="token punctuation">)</span>

<span class="token comment">// FUarP2p5EnxD66vVDL4PWRoWMzA56ZVHG24hpEDFShEz</span>
<span class="token keyword">var</span> feePayer<span class="token punctuation">,</span> <span class="token boolean">_</span> <span class="token operator">=</span> types<span class="token punctuation">.</span><span class="token function">AccountFromBase58</span><span class="token punctuation">(</span><span class="token string">&quot;4TMFNY9ntAn3CHzguSAvDNLPRoQTaK3sWbQQXdDXaE6KWRBLufGL6PJdsD2koiEe3gGmMdRK3aAw7sikGNksHJrN&quot;</span><span class="token punctuation">)</span>

<span class="token comment">// 9aE476sH92Vz7DMPyq5WLPkrKWivxeuTKEFKd2sZZcde</span>
<span class="token keyword">var</span> alice<span class="token punctuation">,</span> <span class="token boolean">_</span> <span class="token operator">=</span> types<span class="token punctuation">.</span><span class="token function">AccountFromBase58</span><span class="token punctuation">(</span><span class="token string">&quot;4voSPg3tYuWbKzimpQK9EbXHmuyy5fUrtXvpLDMLkmY6TRncaTHAKGD8jUg3maB5Jbrd9CkQg4qjJMyN6sQvnEF2&quot;</span><span class="token punctuation">)</span>

<span class="token keyword">var</span> mintPubkey <span class="token operator">=</span> common<span class="token punctuation">.</span><span class="token function">PublicKeyFromString</span><span class="token punctuation">(</span><span class="token string">&quot;F6tecPzBMF47yJ2EN6j2aGtE68yR5jehXcZYVZa6ZETo&quot;</span><span class="token punctuation">)</span>

<span class="token keyword">var</span> aliceTokenRandomTokenPubkey <span class="token operator">=</span> common<span class="token punctuation">.</span><span class="token function">PublicKeyFromString</span><span class="token punctuation">(</span><span class="token string">&quot;HeCBh32JJ8DxcjTyc6q46tirHR8hd2xj3mGoAcQ7eduL&quot;</span><span class="token punctuation">)</span>

<span class="token keyword">var</span> aliceTokenATAPubkey <span class="token operator">=</span> common<span class="token punctuation">.</span><span class="token function">PublicKeyFromString</span><span class="token punctuation">(</span><span class="token string">&quot;J1T6kAPowNFcxFh4pmwSqxQM9AitN7HwLyvxV2ZGfLf2&quot;</span><span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	c <span class="token operator">:=</span> client<span class="token punctuation">.</span><span class="token function">NewClient</span><span class="token punctuation">(</span>rpc<span class="token punctuation">.</span>DevnetRPCEndpoint<span class="token punctuation">)</span>

	res<span class="token punctuation">,</span> err <span class="token operator">:=</span> c<span class="token punctuation">.</span><span class="token function">GetLatestBlockhash</span><span class="token punctuation">(</span>context<span class="token punctuation">.</span><span class="token function">Background</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
	<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		log<span class="token punctuation">.</span><span class="token function">Fatalf</span><span class="token punctuation">(</span><span class="token string">&quot;get recent block hash error, err: %v\\n&quot;</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>

	tx<span class="token punctuation">,</span> err <span class="token operator">:=</span> types<span class="token punctuation">.</span><span class="token function">NewTransaction</span><span class="token punctuation">(</span>types<span class="token punctuation">.</span>NewTransactionParam<span class="token punctuation">{</span>
		Message<span class="token punctuation">:</span> types<span class="token punctuation">.</span><span class="token function">NewMessage</span><span class="token punctuation">(</span>types<span class="token punctuation">.</span>NewMessageParam<span class="token punctuation">{</span>
			FeePayer<span class="token punctuation">:</span>        feePayer<span class="token punctuation">.</span>PublicKey<span class="token punctuation">,</span>
			RecentBlockhash<span class="token punctuation">:</span> res<span class="token punctuation">.</span>Blockhash<span class="token punctuation">,</span>
			Instructions<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>types<span class="token punctuation">.</span>Instruction<span class="token punctuation">{</span>
				tokenprog<span class="token punctuation">.</span><span class="token function">TransferChecked</span><span class="token punctuation">(</span>tokenprog<span class="token punctuation">.</span>TransferCheckedParam<span class="token punctuation">{</span>
					From<span class="token punctuation">:</span>     aliceTokenRandomTokenPubkey<span class="token punctuation">,</span>
					To<span class="token punctuation">:</span>       aliceTokenATAPubkey<span class="token punctuation">,</span>
					Mint<span class="token punctuation">:</span>     mintPubkey<span class="token punctuation">,</span>
					Auth<span class="token punctuation">:</span>     alice<span class="token punctuation">.</span>PublicKey<span class="token punctuation">,</span>
					Signers<span class="token punctuation">:</span>  <span class="token punctuation">[</span><span class="token punctuation">]</span>common<span class="token punctuation">.</span>PublicKey<span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
					Amount<span class="token punctuation">:</span>   <span class="token number">1e8</span><span class="token punctuation">,</span>
					Decimals<span class="token punctuation">:</span> <span class="token number">8</span><span class="token punctuation">,</span>
				<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			<span class="token punctuation">}</span><span class="token punctuation">,</span>
		<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
		Signers<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>types<span class="token punctuation">.</span>Account<span class="token punctuation">{</span>feePayer<span class="token punctuation">,</span> alice<span class="token punctuation">}</span><span class="token punctuation">,</span>
	<span class="token punctuation">}</span><span class="token punctuation">)</span>
	<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		log<span class="token punctuation">.</span><span class="token function">Fatalf</span><span class="token punctuation">(</span><span class="token string">&quot;failed to new tx, err: %v&quot;</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>

	txhash<span class="token punctuation">,</span> err <span class="token operator">:=</span> c<span class="token punctuation">.</span><span class="token function">SendTransaction</span><span class="token punctuation">(</span>context<span class="token punctuation">.</span><span class="token function">Background</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> tx<span class="token punctuation">)</span>
	<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		log<span class="token punctuation">.</span><span class="token function">Fatalf</span><span class="token punctuation">(</span><span class="token string">&quot;send raw tx error, err: %v\\n&quot;</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>

	log<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;txhash:&quot;</span><span class="token punctuation">,</span> txhash<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br></div></div>`,2);function p(o,e){return t}var u=n(a,[["render",p]]);export{u as default};
