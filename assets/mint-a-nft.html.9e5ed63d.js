import{_ as n,e as s}from"./app.df2b1555.js";const a={},t=s(`<h1 id="mint-a-nft" tabindex="-1"><a class="header-anchor" href="#mint-a-nft" aria-hidden="true">#</a> Mint A NFT</h1><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;context&quot;</span>
	<span class="token string">&quot;fmt&quot;</span>
	<span class="token string">&quot;log&quot;</span>

	<span class="token string">&quot;github.com/portto/solana-go-sdk/client&quot;</span>
	<span class="token string">&quot;github.com/portto/solana-go-sdk/common&quot;</span>
	<span class="token string">&quot;github.com/portto/solana-go-sdk/pkg/pointer&quot;</span>
	<span class="token string">&quot;github.com/portto/solana-go-sdk/program/assotokenprog&quot;</span>
	<span class="token string">&quot;github.com/portto/solana-go-sdk/program/metaplex/tokenmeta&quot;</span>
	<span class="token string">&quot;github.com/portto/solana-go-sdk/program/sysprog&quot;</span>
	<span class="token string">&quot;github.com/portto/solana-go-sdk/program/tokenprog&quot;</span>
	<span class="token string">&quot;github.com/portto/solana-go-sdk/rpc&quot;</span>
	<span class="token string">&quot;github.com/portto/solana-go-sdk/types&quot;</span>
<span class="token punctuation">)</span>

<span class="token comment">// FUarP2p5EnxD66vVDL4PWRoWMzA56ZVHG24hpEDFShEz</span>
<span class="token keyword">var</span> feePayer<span class="token punctuation">,</span> <span class="token boolean">_</span> <span class="token operator">=</span> types<span class="token punctuation">.</span><span class="token function">AccountFromBase58</span><span class="token punctuation">(</span><span class="token string">&quot;4TMFNY9ntAn3CHzguSAvDNLPRoQTaK3sWbQQXdDXaE6KWRBLufGL6PJdsD2koiEe3gGmMdRK3aAw7sikGNksHJrN&quot;</span><span class="token punctuation">)</span>

<span class="token comment">// 9aE476sH92Vz7DMPyq5WLPkrKWivxeuTKEFKd2sZZcde</span>
<span class="token keyword">var</span> alice<span class="token punctuation">,</span> <span class="token boolean">_</span> <span class="token operator">=</span> types<span class="token punctuation">.</span><span class="token function">AccountFromBase58</span><span class="token punctuation">(</span><span class="token string">&quot;4voSPg3tYuWbKzimpQK9EbXHmuyy5fUrtXvpLDMLkmY6TRncaTHAKGD8jUg3maB5Jbrd9CkQg4qjJMyN6sQvnEF2&quot;</span><span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	c <span class="token operator">:=</span> client<span class="token punctuation">.</span><span class="token function">NewClient</span><span class="token punctuation">(</span>rpc<span class="token punctuation">.</span>DevnetRPCEndpoint<span class="token punctuation">)</span>

	mint <span class="token operator">:=</span> types<span class="token punctuation">.</span><span class="token function">NewAccount</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;NFT: %v\\n&quot;</span><span class="token punctuation">,</span> mint<span class="token punctuation">.</span>PublicKey<span class="token punctuation">.</span><span class="token function">ToBase58</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

	ata<span class="token punctuation">,</span> <span class="token boolean">_</span><span class="token punctuation">,</span> err <span class="token operator">:=</span> common<span class="token punctuation">.</span><span class="token function">FindAssociatedTokenAddress</span><span class="token punctuation">(</span>feePayer<span class="token punctuation">.</span>PublicKey<span class="token punctuation">,</span> mint<span class="token punctuation">.</span>PublicKey<span class="token punctuation">)</span>
	<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		log<span class="token punctuation">.</span><span class="token function">Fatalf</span><span class="token punctuation">(</span><span class="token string">&quot;failed to find a valid ata, err: %v&quot;</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>

	tokenMetadataPubkey<span class="token punctuation">,</span> err <span class="token operator">:=</span> tokenmeta<span class="token punctuation">.</span><span class="token function">GetTokenMetaPubkey</span><span class="token punctuation">(</span>mint<span class="token punctuation">.</span>PublicKey<span class="token punctuation">)</span>
	<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		log<span class="token punctuation">.</span><span class="token function">Fatalf</span><span class="token punctuation">(</span><span class="token string">&quot;failed to find a valid token metadata, err: %v&quot;</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>

	<span class="token punctuation">}</span>

	tokenMasterEditionPubkey<span class="token punctuation">,</span> err <span class="token operator">:=</span> tokenmeta<span class="token punctuation">.</span><span class="token function">GetMasterEdition</span><span class="token punctuation">(</span>mint<span class="token punctuation">.</span>PublicKey<span class="token punctuation">)</span>
	<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		log<span class="token punctuation">.</span><span class="token function">Fatalf</span><span class="token punctuation">(</span><span class="token string">&quot;failed to find a valid master edition, err: %v&quot;</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>

	mintAccountRent<span class="token punctuation">,</span> err <span class="token operator">:=</span> c<span class="token punctuation">.</span><span class="token function">GetMinimumBalanceForRentExemption</span><span class="token punctuation">(</span>context<span class="token punctuation">.</span><span class="token function">Background</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> tokenprog<span class="token punctuation">.</span>MintAccountSize<span class="token punctuation">)</span>
	<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		log<span class="token punctuation">.</span><span class="token function">Fatalf</span><span class="token punctuation">(</span><span class="token string">&quot;failed to get mint account rent, err: %v&quot;</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>

	recentBlockhashResponse<span class="token punctuation">,</span> err <span class="token operator">:=</span> c<span class="token punctuation">.</span><span class="token function">GetLatestBlockhash</span><span class="token punctuation">(</span>context<span class="token punctuation">.</span><span class="token function">Background</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
	<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		log<span class="token punctuation">.</span><span class="token function">Fatalf</span><span class="token punctuation">(</span><span class="token string">&quot;failed to get recent blockhash, err: %v&quot;</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>

	tx<span class="token punctuation">,</span> err <span class="token operator">:=</span> types<span class="token punctuation">.</span><span class="token function">NewTransaction</span><span class="token punctuation">(</span>types<span class="token punctuation">.</span>NewTransactionParam<span class="token punctuation">{</span>
		Signers<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>types<span class="token punctuation">.</span>Account<span class="token punctuation">{</span>mint<span class="token punctuation">,</span> feePayer<span class="token punctuation">}</span><span class="token punctuation">,</span>
		Message<span class="token punctuation">:</span> types<span class="token punctuation">.</span><span class="token function">NewMessage</span><span class="token punctuation">(</span>types<span class="token punctuation">.</span>NewMessageParam<span class="token punctuation">{</span>
			FeePayer<span class="token punctuation">:</span>        feePayer<span class="token punctuation">.</span>PublicKey<span class="token punctuation">,</span>
			RecentBlockhash<span class="token punctuation">:</span> recentBlockhashResponse<span class="token punctuation">.</span>Blockhash<span class="token punctuation">,</span>
			Instructions<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>types<span class="token punctuation">.</span>Instruction<span class="token punctuation">{</span>
				sysprog<span class="token punctuation">.</span><span class="token function">CreateAccount</span><span class="token punctuation">(</span>sysprog<span class="token punctuation">.</span>CreateAccountParam<span class="token punctuation">{</span>
					From<span class="token punctuation">:</span>     feePayer<span class="token punctuation">.</span>PublicKey<span class="token punctuation">,</span>
					New<span class="token punctuation">:</span>      mint<span class="token punctuation">.</span>PublicKey<span class="token punctuation">,</span>
					Owner<span class="token punctuation">:</span>    common<span class="token punctuation">.</span>TokenProgramID<span class="token punctuation">,</span>
					Lamports<span class="token punctuation">:</span> mintAccountRent<span class="token punctuation">,</span>
					Space<span class="token punctuation">:</span>    tokenprog<span class="token punctuation">.</span>MintAccountSize<span class="token punctuation">,</span>
				<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
				tokenprog<span class="token punctuation">.</span><span class="token function">InitializeMint</span><span class="token punctuation">(</span>tokenprog<span class="token punctuation">.</span>InitializeMintParam<span class="token punctuation">{</span>
					Decimals<span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
					Mint<span class="token punctuation">:</span>     mint<span class="token punctuation">.</span>PublicKey<span class="token punctuation">,</span>
					MintAuth<span class="token punctuation">:</span> feePayer<span class="token punctuation">.</span>PublicKey<span class="token punctuation">,</span>
				<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
				tokenmeta<span class="token punctuation">.</span><span class="token function">CreateMetadataAccount</span><span class="token punctuation">(</span>tokenmeta<span class="token punctuation">.</span>CreateMetadataAccountParam<span class="token punctuation">{</span>
					Metadata<span class="token punctuation">:</span>                tokenMetadataPubkey<span class="token punctuation">,</span>
					Mint<span class="token punctuation">:</span>                    mint<span class="token punctuation">.</span>PublicKey<span class="token punctuation">,</span>
					MintAuthority<span class="token punctuation">:</span>           feePayer<span class="token punctuation">.</span>PublicKey<span class="token punctuation">,</span>
					Payer<span class="token punctuation">:</span>                   feePayer<span class="token punctuation">.</span>PublicKey<span class="token punctuation">,</span>
					UpdateAuthority<span class="token punctuation">:</span>         feePayer<span class="token punctuation">.</span>PublicKey<span class="token punctuation">,</span>
					UpdateAuthorityIsSigner<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
					IsMutable<span class="token punctuation">:</span>               <span class="token boolean">true</span><span class="token punctuation">,</span>
					MintData<span class="token punctuation">:</span> tokenmeta<span class="token punctuation">.</span>Data<span class="token punctuation">{</span>
						Name<span class="token punctuation">:</span>                 <span class="token string">&quot;Fake SMS #1355&quot;</span><span class="token punctuation">,</span>
						Symbol<span class="token punctuation">:</span>               <span class="token string">&quot;FSMB&quot;</span><span class="token punctuation">,</span>
						Uri<span class="token punctuation">:</span>                  <span class="token string">&quot;https://34c7ef24f4v2aejh75xhxy5z6ars4xv47gpsdrei6fiowptk2nqq.arweave.net/3wXyF1wvK6ARJ_9ue-O58CMuXrz5nyHEiPFQ6z5q02E&quot;</span><span class="token punctuation">,</span>
						SellerFeeBasisPoints<span class="token punctuation">:</span> <span class="token number">100</span><span class="token punctuation">,</span>
						Creators<span class="token punctuation">:</span> <span class="token operator">&amp;</span><span class="token punctuation">[</span><span class="token punctuation">]</span>tokenmeta<span class="token punctuation">.</span>Creator<span class="token punctuation">{</span>
							<span class="token punctuation">{</span>
								Address<span class="token punctuation">:</span>  feePayer<span class="token punctuation">.</span>PublicKey<span class="token punctuation">,</span>
								Verified<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
								Share<span class="token punctuation">:</span>    <span class="token number">100</span><span class="token punctuation">,</span>
							<span class="token punctuation">}</span><span class="token punctuation">,</span>
						<span class="token punctuation">}</span><span class="token punctuation">,</span>
					<span class="token punctuation">}</span><span class="token punctuation">,</span>
				<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
				assotokenprog<span class="token punctuation">.</span><span class="token function">CreateAssociatedTokenAccount</span><span class="token punctuation">(</span>assotokenprog<span class="token punctuation">.</span>CreateAssociatedTokenAccountParam<span class="token punctuation">{</span>
					Funder<span class="token punctuation">:</span>                 feePayer<span class="token punctuation">.</span>PublicKey<span class="token punctuation">,</span>
					Owner<span class="token punctuation">:</span>                  feePayer<span class="token punctuation">.</span>PublicKey<span class="token punctuation">,</span>
					Mint<span class="token punctuation">:</span>                   mint<span class="token punctuation">.</span>PublicKey<span class="token punctuation">,</span>
					AssociatedTokenAccount<span class="token punctuation">:</span> ata<span class="token punctuation">,</span>
				<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
				tokenprog<span class="token punctuation">.</span><span class="token function">MintTo</span><span class="token punctuation">(</span>tokenprog<span class="token punctuation">.</span>MintToParam<span class="token punctuation">{</span>
					Mint<span class="token punctuation">:</span>   mint<span class="token punctuation">.</span>PublicKey<span class="token punctuation">,</span>
					To<span class="token punctuation">:</span>     ata<span class="token punctuation">,</span>
					Auth<span class="token punctuation">:</span>   feePayer<span class="token punctuation">.</span>PublicKey<span class="token punctuation">,</span>
					Amount<span class="token punctuation">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
				<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
				tokenmeta<span class="token punctuation">.</span><span class="token function">CreateMasterEdition</span><span class="token punctuation">(</span>tokenmeta<span class="token punctuation">.</span>CreateMasterEditionParam<span class="token punctuation">{</span>
					Edition<span class="token punctuation">:</span>         tokenMasterEditionPubkey<span class="token punctuation">,</span>
					Mint<span class="token punctuation">:</span>            mint<span class="token punctuation">.</span>PublicKey<span class="token punctuation">,</span>
					UpdateAuthority<span class="token punctuation">:</span> feePayer<span class="token punctuation">.</span>PublicKey<span class="token punctuation">,</span>
					MintAuthority<span class="token punctuation">:</span>   feePayer<span class="token punctuation">.</span>PublicKey<span class="token punctuation">,</span>
					Metadata<span class="token punctuation">:</span>        tokenMetadataPubkey<span class="token punctuation">,</span>
					Payer<span class="token punctuation">:</span>           feePayer<span class="token punctuation">.</span>PublicKey<span class="token punctuation">,</span>
					MaxSupply<span class="token punctuation">:</span>       pointer<span class="token punctuation">.</span><span class="token function">Uint64</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
				<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			<span class="token punctuation">}</span><span class="token punctuation">,</span>
		<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
	<span class="token punctuation">}</span><span class="token punctuation">)</span>
	<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		log<span class="token punctuation">.</span><span class="token function">Fatalf</span><span class="token punctuation">(</span><span class="token string">&quot;failed to new a tx, err: %v&quot;</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>

	sig<span class="token punctuation">,</span> err <span class="token operator">:=</span> c<span class="token punctuation">.</span><span class="token function">SendTransaction</span><span class="token punctuation">(</span>context<span class="token punctuation">.</span><span class="token function">Background</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> tx<span class="token punctuation">)</span>
	<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		log<span class="token punctuation">.</span><span class="token function">Fatalf</span><span class="token punctuation">(</span><span class="token string">&quot;failed to send tx, err: %v&quot;</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>

	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>sig<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br><span class="line-number">102</span><br><span class="line-number">103</span><br><span class="line-number">104</span><br><span class="line-number">105</span><br><span class="line-number">106</span><br><span class="line-number">107</span><br><span class="line-number">108</span><br><span class="line-number">109</span><br><span class="line-number">110</span><br><span class="line-number">111</span><br><span class="line-number">112</span><br><span class="line-number">113</span><br><span class="line-number">114</span><br><span class="line-number">115</span><br><span class="line-number">116</span><br><span class="line-number">117</span><br><span class="line-number">118</span><br><span class="line-number">119</span><br><span class="line-number">120</span><br><span class="line-number">121</span><br><span class="line-number">122</span><br><span class="line-number">123</span><br><span class="line-number">124</span><br><span class="line-number">125</span><br><span class="line-number">126</span><br><span class="line-number">127</span><br><span class="line-number">128</span><br><span class="line-number">129</span><br><span class="line-number">130</span><br><span class="line-number">131</span><br></div></div>`,2);function p(o,e){return t}var u=n(a,[["render",p]]);export{u as default};
