(function(v,a,p,b){"use strict";const{Pressable:h}=a.findByProps("Button","Text","View"),S=a.findByName("ProfileBanner",!1),B=a.findByName("HeaderAvatar",!1),{openMediaModal:w}=a.findByProps("openMediaModal"),{hideActionSheet:I}=a.findByProps("hideActionSheet"),{getChannelId:M}=a.findByStoreName("SelectedChannelStore"),{getGuildId:P}=a.findByStoreName("SelectedGuildStore");function A(t){return new Promise(function(n,e){b.ReactNative.Image.getSize(t,function(i,r){return n({width:i,height:r})},function(i){return e(i)})})}async function o(t,n){const{width:e,height:i}=await A(t);I(),w({initialSources:[{uri:t,sourceURI:t,width:e,height:i,guildId:P(),channelId:M()}],initialIndex:0,originLayout:{width:0,height:0,x:n.pageX,y:n.pageY,resizeMode:"fill"}})}const $=p.after("default",B,function(t,n){let[{user:e,style:i,guildId:r}]=t;var d,l,u,y="png";if(typeof((d=e.guildMemberAvatars)===null||d===void 0?void 0:d[r])=="string"){var s;!((s=e.guildMemberAvatars)===null||s===void 0)&&s[r].includes("a_")&&(y="gif")}const m=((l=e.guildMemberAvatars)===null||l===void 0?void 0:l[r])&&`https://cdn.discordapp.com/guilds/${r}/users/${e.id}/avatars/${e.guildMemberAvatars[r]}.${y}?size=4096`,c=e==null||(u=e.getAvatarURL)===null||u===void 0?void 0:u.call(e,!1,4096,!0);if(!c)return n;const R=typeof c=="number"?`https://cdn.discordapp.com/embed/avatars/${Number(BigInt(e.id)>>22n)%6}.png`:c?.replace(".webp",".png");return delete n.props.style,React.createElement(h,{onPress:function(f){let{nativeEvent:g}=f;return o(R,g)},onLongPress:function(f){let{nativeEvent:g}=f;return m&&o(m,g)},style:i},n)}),z=p.after("default",S,function(t,n){let[{bannerSource:e}]=t;if(typeof e?.uri!="string"||!n)return n;const i=e.uri.replace(/(?:\?size=\d{3,4})?$/,"?size=4096").replace(".webp",".png");return React.createElement(h,{onPress:function(r){let{nativeEvent:d}=r;return o(i,d)}},n)});function N(){$(),z()}return v.onUnload=N,v})({},vendetta.metro,vendetta.patcher,vendetta.metro.common);
