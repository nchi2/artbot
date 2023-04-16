const {
  Client,
  Intents,
  MessageEmbed,
  MessageAttachment,
} = require("discord.js");
const Discord = require("discord.js");
const { token } = require("./config.json");
const attachment = new MessageAttachment("./BlockNote.png");

const client = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
});

async function createSlashCommands() {
  await client.application.commands.create({
    name: "테스트",
    description: "'테스트'의 전체 리스트를 불러옵니다.",
  });
  //// ㄱ /////
  //// ㄴ /////
  //// ㄷ /////
  //// ㄹ /////
  await client.application.commands.create({
    name: "루나",
    description: "'루나'에 대해 설명합니다.",
  });
  //// ㅁ /////
  await client.application.commands.create({
    name: "메타마스크",
    description: "'메타마스크'에 대해 설명합니다.",
  });
  //// ㅂ /////
  await client.application.commands.create({
    name: "백서",
    description: "'백서'에 대해 설명합니다.",
  });
  await client.application.commands.create({
    name: "블록체인",
    description: "'블록체인'에 대해 설명합니다.",
  });
  await client.application.commands.create({
    name: "비트코인",
    description: "'비트코인'에 대해 설명합니다.",
  });
  //// ㅅ /////
  await client.application.commands.create({
    name: "스테이블코인",
    description: "'스테이블코인'에 대해 설명합니다.",
  });
  //// ㅇ /////
  await client.application.commands.create({
    name: "알트코인",
    description: "'알트코인'에 대해 설명합니다.",
  });
  await client.application.commands.create({
    name: "암호화폐_공포_탐욕지수",
    description: "'암호화폐_공포_탐욕지수'에 대해 설명합니다.",
  });
  //// ㅈ /////
  await client.application.commands.create({
    name: "자본시장법",
    description: "'자본시장법'에 대해 설명합니다.",
  });
  await client.application.commands.create({
    name: "증권거래법",
    description: "'증권거래법'에 대해 설명합니다.",
  });
  await client.application.commands.create({
    name: "전자증권법",
    description: "'전자증권법'에 대해 설명합니다.",
  });
  //// ㅊ /////
  //// ㅋ /////
  await client.application.commands.create({
    name: "크립토윈터",
    description: "'크립토윈터'에 대해 설명합니다.",
  });
  //// ㅌ /////
  await client.application.commands.create({
    name: "토큰",
    description: "'토큰'에 대해 설명합니다.",
  });
  //// ㅍ /////
  //// ㅎ /////
  await client.application.commands.create({
    name: "하드포크",
    description: "'하드포크'에 대해 설명합니다.",
  });
  /*
  //// A ////
  await client.application.commands.create({
    name: "Alt",
    description: "'Alt'에 대해 설명합니다.",
  });
  //// B ////
  await client.application.commands.create({
    name: "Bitcoin",
    description: "'Bitcoin'에 대해 설명합니다.",
  });
  await client.application.commands.create({
    name: "Blockchain",
    description: "'Blockchain'에 대해 설명합니다.",
  });
  //// C ////
  await client.application.commands.create({
    name: "CBDC",
    description: "'CBDC'에 대해 설명합니다.",
  });
  await client.application.commands.create({
    name: "Coin",
    description: "'Coin'에 대해 설명합니다.",
  });
  await client.application.commands.create({
    name: "Crypto_Winter",
    description: "'Crypto_Winter'에 대해 설명합니다.",
  });
  //// D ////
  //// E ////
  //// F ////
  //// G ////
  //// H ////
  //// I ////
  //// J ////
  //// K ////
  //// L ////
  //// M ////
  //// N ////
  //// O ////
  //// P ////
  //// Q ////
  //// R ////
  //// S ////
  //// T ////
  //// U ////
  //// V ////
  //// W ////
  //// X ////
  //// Y ////
  //// Z ////
  */
}

client.once("ready", async () => {
  console.log(`Logged in as ${client.user.tag}!`);
  await createSlashCommands();
});

client.on("interactionCreate", async (interaction) => {
  if (!interaction.isCommand()) return;

  const { commandName } = interaction;
  if (commandName === "테스트") {
    const embed = new MessageEmbed()
      .setTitle("블록노트")
      .setURL(
        "https://www.notion.so/Block-Note-6785dbaae3d9407a93f9392a29e1c91c"
      )
      .addFields({
        name: "'!' 커맨드를 통해 자세한 내용을 확인할 수 있습니다.",
        value: "ex) !비트코인 ",
      })
      .setDescription("**블록노트 전체 리스트입니다.** ")
      .setColor(0xffff)
      .setThumbnail("https://i.ibb.co/gD8JH3j/Block-Note.png")
      .addFields({
        name: "ㄹ",
        value: "루나",
      })
      .addFields({
        name: "ㅁ",
        value: "메타마스크",
      })
      .addFields({
        name: "ㅂ",
        value: "백서, 블록체인, 비트코인",
      })
      .addFields({
        name: "ㅅ",
        value: "스테이블코인",
      })
      .addFields({
        name: "ㅇ",
        value: "알트코인, 암호화폐 공포 탐욕지수",
      })
      .addFields({
        name: "ㅈ",
        value: "자본시장법, 증권거래법, 전자증권법",
      })
      .addFields({
        name: "ㅋ",
        value: "크립토윈터",
      })
      .addFields({
        name: "ㅌ",
        value: "토큰",
      })
      .addFields({
        name: "ㅎ",
        value: "하드포크",
      })
      .addFields({
        name: "블록노트 바로가기",
        value:
          "https://www.notion.so/Block-Note-6785dbaae3d9407a93f9392a29e1c91c",
      });
    await interaction.reply({ embeds: [embed] });
  }
  //// ㄱ /////
  //// ㄴ /////
  //// ㄷ /////
  //// ㄹ /////
  if (commandName === "루나") {
    const embed = new MessageEmbed()
      .setTitle("루나")
      .setURL(
        "https://www.notion.so/art-aslan-research-team/937f43b8cb56467b9bee82c443d9bc50"
      )
      .addFields({
        name: ":question:  뜻풀이 및 해석",
        value:
          "LUNA Classic은 테라폼랩스의 Proof of Stake 암호화폐로, 티몬 창업자와 애니파이 CEO가 합작하여 만든 탈중앙화 스테이블 코인 프로젝트 중 하나로, UST의 공급량을 조절하여 가치를 유지하며, 2022년 5월에는 시가총액 5위 이내의 메이저 코인이 -99.99999%까지 붕괴된 사례가 있었다.",
      })
      .setColor(0xffff)
      .setThumbnail("https://i.ibb.co/gD8JH3j/Block-Note.png")
      .addFields({
        name: ":pencil: 예문",
        value:
          "루나는 일주일만에 무려 -99.99999%라는 암호화폐 사상 전무후무한 기록을 세우게 되었다.",
      })
      .addFields({
        name: ":ballot_box_with_check: 연관어",
        value: "암호화폐, 탈중앙화, 스테이블 코인",
      })
      .addFields({
        name: ":link: 첨부파일 및 링크",
        value: "-",
      });
    await interaction.reply({ embeds: [embed] });
  }
  //// ㅁ /////
  if (commandName === "메타마스크") {
    const embed = new MessageEmbed()
      .setTitle("메타마스크")
      .setURL(
        "https://www.notion.so/art-aslan-research-team/a2864d1554804a20b182224867a3777d"
      )
      .addFields({
        name: ":question:  뜻풀이 및 해석",
        value:
          "메타마스크는 이더리움 기반의 블록체인 네트워크에서 암호화폐를 보내고 받을 수 있는 지갑이자 브라우저 익스텐션으로, 브라우저 상단에 표시되는 아이콘을 클릭하여 이더리움 기반의 DApp과 상호작용할 수 있으며, 사용자의 개인키를 안전하게 보관하고 관리하여 외부로부터 보호합니다.",
      })
      .setColor(0xffff)
      .setThumbnail("https://i.ibb.co/gD8JH3j/Block-Note.png")
      .addFields({
        name: ":pencil:  예문",
        value:
          "암호화폐를 보유하고 있는 사용자라면 메타마스크를 사용하여 보안을 강화하고 편리한 거래를 할 수 있습니다.",
      })
      .addFields({
        name: ":ballot_box_with_check:  연관어",
        value: "이더리움, 블록체인, 암호화폐",
      })
      .addFields({
        name: ":link:  첨부파일 및 링크",
        value: "https://metamask.io/",
      });
    await interaction.reply({ embeds: [embed] });
  }
  //// ㅂ /////
  if (commandName === "백서") {
    const embed = new MessageEmbed()
      .setTitle("백서")
      .setURL(
        "https://www.notion.so/art-aslan-research-team/8cfaa8030b60456a84c3e3296e4a5f4d"
      )
      .addFields({
        name: ":question:  뜻풀이 및 해석",
        value:
          "백서(White Paper)는 사업자가 만든 프로젝트 계획서라는 의미로 통용됩니다.유례는 영국의 정부 발간 보고서의 표지를 흰색으로 했었다는 것에서 시작되었습니다.",
      })
      .setColor(0xffff)
      .setThumbnail("https://i.ibb.co/gD8JH3j/Block-Note.png")
      .addFields({
        name: ":pencil:  예문",
        value:
          "새로운 NFT프로젝트에 참여하기전에 해당 프로젝트의 백서(White Paper)를 확인해보는 것이 좋다.",
      })
      .addFields({
        name: ":ballot_box_with_check:  연관어",
        value: "NFT.",
      })
      .addFields({
        name: ":link:  첨부파일 및 링크",
        value: "-",
      });
    await interaction.reply({ embeds: [embed] });
  }
  if (commandName === "블록체인") {
    const embed = new MessageEmbed()
      .setTitle("블록체인")
      .setURL(
        "https://www.notion.so/art-aslan-research-team/92d9aaafa9674279894ba8b346c3217a"
      )
      .addFields({
        name: ":question:  뜻풀이 및 해석",
        value:
          "블록체인은 분산 원장 기술로, 데이터를 블록으로 구성하여 체인으로 연결하여 안전하고 무결성이 보장되는 분산 네트워크에서 작동하며, 각 노드가 검증하고 동의하면 데이터 변경이 가능하며, 이를 통해 보안성이 요구되는 다양한 분야에서 활용됩니다.",
      })
      .setColor(0xffff)
      .setThumbnail("https://i.ibb.co/gD8JH3j/Block-Note.png")
      .addFields({
        name: ":pencil:  예문",
        value:
          "비트코인은 Blockchain 기술을 기반으로 만들어진 가상화폐입니다. Blockchain을 통해 거래 내역이 안전하게 보관되며, 거래 내역을 검증하는 과정에서 발생하는 보상으로 새로운 비트코인을 채굴할 수 있습니다.",
      })
      .addFields({
        name: ":ballot_box_with_check:  연관어",
        value:
          "분산 원장(Distributed Ledger), 노드(Node), 블록(Block), 비트코인",
      })
      .addFields({
        name: ":link:  첨부파일 및 링크",
        value: "-",
      });
    await interaction.reply({ embeds: [embed] });
  }
  if (commandName === "비트코인") {
    const embed = new MessageEmbed()
      .setTitle("비트코인")
      .setURL(
        "https://www.notion.so/art-aslan-research-team/bb077d5786e845d3b1936b9920944fa5"
      )
      .addFields({
        name: ":question:  뜻풀이 및 해석",
        value:
          "비트코인은 2009년에 태어난 글로벌 전자지불 네트워크이자, 수학적 알고리즘을 바탕으로 중앙 관리기관 없이 P2P 방식의 수평적 네트워크에서 거래되는 디지털 화폐로서, 익명성이 보장된다는 특징을 가지고 있습니다.",
      })
      .setColor(0xffff)
      .setThumbnail("https://i.ibb.co/gD8JH3j/Block-Note.png")
      .addFields({
        name: ":pencil:  예문",
        value:
          "비트코인은 발행될 총량이 정해져 있고 130여년 뒤면 발행이 끝난다.",
      })
      .addFields({
        name: ":ballot_box_with_check:  연관어",
        value: "사토시 나카모토, P2P",
      })
      .addFields({
        name: ":link:  첨부파일 및 링크",
        value: "https://bitcoin.org/bitcoin.pdf",
      });
    await interaction.reply({ embeds: [embed] });
  }
  //// ㅅ /////
  if (commandName === "스테이블코인") {
    const embed = new MessageEmbed()
      .setTitle("스테이블코인")
      .setURL(
        "https://www.notion.so/art-aslan-research-team/6420087a66fc4d7c9bcabae86ef1d171"
      )
      .addFields({
        name: ":question:  뜻풀이 및 해석",
        value:
          "스테이블코인 (Stable Coin)는 가치안정화폐라고도 합니다. 이름의 뜻 그대로 화폐의 가격이 안정적으로 유지되도록 고안된 암호화폐입니다. 스테이블코인은 법정화폐 또는 다른 암호화폐를 담보로 잡거나, 정교한 알고리즘에 의하여 공급량을 조정하는 방식으로 가격을 일정하게 유지합니다.",
      })
      .addFields({
        name: ":pencil:  예문",
        value:
          "스테이블코인 (Stable Coin)은 탈중앙화된 금융시스템인 디파이를 기반으로 하지만 실제 탈중앙화와는 상당한 거리가 있다.",
      })
      .addFields({
        name: ":ballot_box_with_check:  연관어",
        value: "법정화폐, 암호화폐, 탈중앙화, 디파이",
      })
      .addFields({
        name: ":link:  첨부파일 및 링크",
        value: "-",
      })
      .setColor(0xffff)
      .setThumbnail("https://i.ibb.co/gD8JH3j/Block-Note.png");
    await interaction.reply({ embeds: [embed] });
  }
  //// ㅇ /////
  if (commandName === "알트코인") {
    const embed = new MessageEmbed()
      .setTitle("알트코인")
      .setURL(
        "https://www.notion.so/art-aslan-research-team/2b3da8699b8148d0840af0f3fa1d2223"
      )
      .addFields({
        name: ":question:  뜻풀이 및 해석",
        value:
          "알트코인(Alt-Coin)은 Alternative Coin의 축약어입니다. 비트코인 이외의 후발 암호화폐를 통칭하는 말이며, 메이저와 마이너를 가리지 않고 알트코인(Alt-Coin)이라고 합니다.",
      })
      .addFields({
        name: ":pencil:  예문",
        value:
          "이더리움은 가장 유망하고 거대한 알트코인(Alt-Coin)으로 알려져 있다.",
      })
      .addFields({
        name: ":ballot_box_with_check:  연관어",
        value: "비트코인, 암호화폐",
      })
      .addFields({
        name: ":link:  첨부파일 및 링크",
        value: "-",
      })
      .setColor(0xffff)
      .setThumbnail("https://i.ibb.co/gD8JH3j/Block-Note.png");
    await interaction.reply({ embeds: [embed] });
  }
  if (commandName === "암호화폐_공포_탐욕지수") {
    const embed = new MessageEmbed()
      .setTitle("암호화폐_공포_탐욕지수")
      .setURL(
        "https://www.notion.so/art-aslan-research-team/480677d3acfb41f2a52158a308c00760"
      )
      .addFields({
        name: ":question:  뜻풀이 및 해석",
        value:
          "Fear & Greed Index (암호화폐 공포 탐욕 지수)는 이하의 기준으로 시장의 전반적인 분위기를 알아 볼 수 있는 지표입니다. 해당 지수는 0에 가까울수록 시장의 ‘극단적 공포’를 나타내며, 100에 가까울수록 ‘극단적 낙관’을 의미합니다.",
      })
      .addFields({
        name: ":pencil:  예문",
        value:
          "Fear & Greed Index를 통하여 가상화폐시장의 전반적인 분위기를 파악할 수 있다.",
      })
      .addFields({
        name: ":ballot_box_with_check:  연관어",
        value: "암호화폐",
      })
      .addFields({
        name: ":link:  첨부파일 및 링크",
        value: "-",
      })
      .setColor(0xffff)
      .setThumbnail("https://i.ibb.co/gD8JH3j/Block-Note.png");
    await interaction.reply({ embeds: [embed] });
  }
  //// ㅈ /////
  if (commandName === "자본시장법") {
    const embed = new MessageEmbed()
      .setTitle("자본시장법")
      .setURL(
        "https://www.notion.so/art-aslan-research-team/54a4225eead84d73b8f9fbf472a72de0"
      )
      .addFields({
        name: ":question:  뜻풀이 및 해석",
        value:
          "대한민국 「자본시장과 금융투자업에 관한 법률」 (약칭: 자본시장법)은 대한민국에서 주식, 채권, 파생상품 등의 금융상품을 발행하고 거래하는 시장을 규제하는 법률입니다. 이 법은 1998년 1월 1일에 시행되어 현재까지 여러 차례 개정되어 왔습니다.",
      })
      .addFields({
        name: ":pencil:  예문",
        value:
          "자본시장법은 대한민국의 금융시장을 안정적으로 운영하기 위한 중요한 법률이며, 투자자 보호와 시장의 투명성을 확보하는 역할을 한다.",
      })
      .addFields({
        name: ":ballot_box_with_check:  연관어",
        value: "암호화폐",
      })
      .addFields({
        name: ":link:  첨부파일 및 링크",
        value:
          "https://www.law.go.kr/%EB%B2%95%EB%A0%B9/%EC%9E%90%EB%B3%B8%EC%8B%9C%EC%9E%A5%EA%B3%BC%EA%B8%88%EC%9C%B5%ED%88%AC%EC%9E%90%EC%97%85%EC%97%90%EA%B4%80%ED%95%9C%EB%B2%95%EB%A5%A0",
        value:
          "https://www.notion.so/art-aslan-research-team/4690635502094fdb8f060016ac8e6ca8#be6cc7bf16be4a0e9c9c48ee428151e5",
      })
      .setColor(0xffff)
      .setThumbnail("https://i.ibb.co/gD8JH3j/Block-Note.png");
    await interaction.reply({ embeds: [embed] });
  }
  if (commandName === "증권거래법") {
    const embed = new MessageEmbed()
      .setTitle("증권거래법")
      .setURL(
        "https://www.notion.so/art-aslan-research-team/c22c9e31e97c467eb54c92b424910953"
      )
      .addFields({
        name: ":question:  뜻풀이 및 해석",
        value:
          "대한민국 증권거래법은 증권에 대한 규제를 담당하는 법령으로, 1966년에 제정되었습니다. 이 법령은 증권 거래에 대한 법적 기준을 제공하며, 증권의 발행, 매매, 유통, 광고 등에 대한 규정을 포함합니다.",
      })
      .addFields({
        name: ":pencil:  예문",
        value:
          "모 증권 회사는 새로운 증권 발행을 위해 관련 법규를 준수하며, 증권거래법 상의 발행 요건을 충족시켰습니다. 이후 증권 발행 등 관련 업무를 수행함에 있어서도 증권거래법을 철저히 준수하며 운영하고 있습니다.",
      })
      .addFields({
        name: ":ballot_box_with_check:  연관어",
        value: "-",
      })
      .addFields({
        name: ":link:  첨부파일 및 링크",
        value: "https://www.law.go.kr/LSW/lsInfoP.do?lsiSeq=85962#0000",
      })
      .setColor(0xffff)
      .setThumbnail("https://i.ibb.co/gD8JH3j/Block-Note.png");
    await interaction.reply({ embeds: [embed] });
  }
  if (commandName === "전자증권법") {
    const embed = new MessageEmbed()
      .setTitle("전자증권법")
      .setURL(
        "https://www.notion.so/art-aslan-research-team/5f3a4ff08a6a4140a10d908989988856"
      )
      .addFields({
        name: ":question:  뜻풀이 및 해석",
        value:
          "한국의 전자증권법은 전자적 방식으로 증권을 발행, 유통, 매매하고 처리하는 것을 규제하는 법령으로, 2008년에 시행되었습니다. 해당 법률은 전자문서 등의 이용과 전자적 수령, 송부, 보관 및 처리 등에 대한 법적 효력을 인정하며, 이를 통해 증권 거래의 투명성과 효율성을 높이고자 합니다.",
      })
      .addFields({
        name: ":pencil:  예문",
        value: "-",
      })
      .addFields({
        name: ":ballot_box_with_check:  연관어",
        value: "전자증권제도, 전자증권법",
      })
      .addFields({
        name: ":link:  첨부파일 및 링크",
        value: "https://m.lawtimes.co.kr/Content/Article?serial=171007",
        value:
          "https://www.fsc.go.kr/comm/getFile?srvcId=BBSTY1&upperNo=73740&fileTy=ATTACH&fileNo=4",
      })
      .setColor(0xffff)
      .setThumbnail("https://i.ibb.co/gD8JH3j/Block-Note.png");
    await interaction.reply({ embeds: [embed] });
  }
  //// ㅊ /////
  //// ㅋ /////
  if (commandName === "크립토윈터") {
    const embed = new MessageEmbed()
      .setTitle("크립토윈터")
      .setURL(
        "https://www.notion.so/art-aslan-research-team/5cd8a82e424b4d4dbe8d76b9f69dbb5f"
      )
      .addFields({
        name: ":question:  뜻풀이 및 해석",
        value:
          "크립토 윈터(Crypto Winter)는 가상화폐 시장의 가격과 거래량이 장기간 저조해지는 기간을 말합니다. 해당 용어는 2017년 가상화폐 시장의 급격한 상승 이후 2018년에 발생한 가격 하락을 지칭하는 용어입니다.",
      })
      .addFields({
        name: ":pencil:  예문",
        value: "크립토 윈터를 극복할 방안을 당국에서 논의중이다.",
      })
      .addFields({
        name: ":ballot_box_with_check:  연관어",
        value: "가상화폐, 블록체인",
      })
      .addFields({
        name: ":link:  첨부파일 및 링크",
        value: "-",
      })
      .setColor(0xffff)
      .setThumbnail("https://i.ibb.co/gD8JH3j/Block-Note.png");
    await interaction.reply({ embeds: [embed] });
  }
  //// ㅌ /////
  if (commandName === "토큰") {
    const embed = new MessageEmbed()
      .setTitle("토큰")
      .setURL(
        "https://www.notion.so/art-aslan-research-team/66176061a53b460dbffb5faf1daaab93"
      )
      .addFields({
        name: ":question:  뜻풀이 및 해석",
        value:
          "Token(토큰)은 암호화폐와 비슷한 디지털 자산입니다. 하지만, 암호화폐와는 다르게, 토큰은 블록체인 기술을 기반으로 한 분산원장에 기록되며, 보통 다른 암호화폐를 위한 기술적 용도나 특정 서비스에서의 권한 부여 등 다양한 용도로 사용됩니다.",
      })
      .addFields({
        name: ":pencil:  예문",
        value:
          "Token을 구매하거나 보유하기 전에는 해당 프로젝트의 백서(Whitepaper)를 비롯한 정보를 충분히 검토하고, 토큰의 가치 변동성 등 위험을 충분히 인지해야 한다.",
      })
      .addFields({
        name: ":ballot_box_with_check:  연관어",
        value: "블록체인, 분산원장, 암호화폐, ICO",
      })
      .addFields({
        name: ":link:  첨부파일 및 링크",
        value: "-",
      })
      .setColor(0xffff)
      .setThumbnail("https://i.ibb.co/gD8JH3j/Block-Note.png");
    await interaction.reply({ embeds: [embed] });
  }
  //// ㅍ /////
  //// ㅎ /////
  if (commandName === "하드포크") {
    const embed = new MessageEmbed()
      .setTitle("하드포크")
      .setURL(
        "https://www.notion.so/art-aslan-research-team/52259ba53035403dab5e83a3736a1e64"
      )
      .addFields({
        name: ":question:  뜻풀이 및 해석",
        value:
          "하드포크(hardfork)는 블록체인의 기본 기능 자체를 수정하는 포크를 말합니다. 하드포크는 블록체인의 문제 해결 및 업그레이드 방식의 하나로서, 업그레이드 이후에는 기존 문제를 해결하고 이전 블록체인과 전혀 다른 프로토콜을 가지는 블록체인이 됩니다. 이러한 하드포크 이후에 채굴 노드들은 새로운 버전으로 강제 업그레이드를 해야 합니다.",
      })
      .addFields({
        name: ":pencil:  예문",
        value:
          "이더리움 핵심 개발자들은 최근 고얼리 테스트넷 출시에 이어 오는 23년 4월 12일 상하이 하드포크 메인넷을 출시할 예정이다.",
      })
      .addFields({
        name: ":ballot_box_with_check:  연관어",
        value: "블록체인, 채굴, 노드, 소프트포크",
      })
      .addFields({
        name: ":link:  첨부파일 및 링크",
        value: "-",
      })
      .setColor(0xffff)
      .setThumbnail("https://i.ibb.co/gD8JH3j/Block-Note.png");
    await interaction.reply({ embeds: [embed] });
  }
  //// A ////
  if (commandName === "AltCoin") {
    const embed = new MessageEmbed()
      .setTitle("알트코인")
      .setURL(
        "https://www.notion.so/art-aslan-research-team/2b3da8699b8148d0840af0f3fa1d2223"
      )
      .addFields({
        name: ":question:  뜻풀이 및 해석",
        value:
          "알트코인(Alt-Coin)은 Alternative Coin의 축약어입니다. 비트코인 이외의 후발 암호화폐를 통칭하는 말이며, 메이저와 마이너를 가리지 않고 알트코인(Alt-Coin)이라고 합니다.",
      })
      .addFields({
        name: ":pencil:  예문",
        value:
          "이더리움은 가장 유망하고 거대한 알트코인(Alt-Coin)으로 알려져 있다.",
      })
      .addFields({
        name: ":ballot_box_with_check:  연관어",
        value: "비트코인, 암호화폐",
      })
      .addFields({
        name: ":link:  첨부파일 및 링크",
        value: "-",
      })
      .setColor(0xffff)
      .setThumbnail("https://i.ibb.co/gD8JH3j/Block-Note.png");
    await interaction.reply({ embeds: [embed] });
  }
  //// B ////
  if (commandName === "Bitcoin") {
    const embed = new MessageEmbed()
      .setTitle("비트코인")
      .setURL(
        "https://www.notion.so/art-aslan-research-team/bb077d5786e845d3b1936b9920944fa5"
      )
      .addFields({
        name: ":question:  뜻풀이 및 해석",
        value:
          "비트코인은 2009년에 태어난 글로벌 전자지불 네트워크이자, 수학적 알고리즘을 바탕으로 중앙 관리기관 없이 P2P 방식의 수평적 네트워크에서 거래되는 디지털 화폐로서, 익명성이 보장된다는 특징을 가지고 있습니다.",
      })
      .setColor(0xffff)
      .setThumbnail("https://i.ibb.co/gD8JH3j/Block-Note.png")
      .addFields({
        name: ":pencil:  예문",
        value:
          "비트코인은 발행될 총량이 정해져 있고 130여년 뒤면 발행이 끝난다.",
      })
      .addFields({
        name: ":ballot_box_with_check:  연관어",
        value: "사토시 나카모토, P2P",
      })
      .addFields({
        name: ":link:  첨부파일 및 링크",
        value: "https://bitcoin.org/bitcoin.pdf",
      });
    await interaction.reply({ embeds: [embed] });
  }
  if (commandName === "Blockchain") {
    const embed = new MessageEmbed()
      .setTitle("블록체인")
      .setURL(
        "https://www.notion.so/art-aslan-research-team/92d9aaafa9674279894ba8b346c3217a"
      )
      .addFields({
        name: ":question:  뜻풀이 및 해석",
        value:
          "블록체인은 분산 원장 기술로, 데이터를 블록으로 구성하여 체인으로 연결하여 안전하고 무결성이 보장되는 분산 네트워크에서 작동하며, 각 노드가 검증하고 동의하면 데이터 변경이 가능하며, 이를 통해 보안성이 요구되는 다양한 분야에서 활용됩니다.",
      })
      .setColor(0xffff)
      .setThumbnail("https://i.ibb.co/gD8JH3j/Block-Note.png")
      .addFields({
        name: ":pencil:  예문",
        value:
          "비트코인은 Blockchain 기술을 기반으로 만들어진 가상화폐입니다. Blockchain을 통해 거래 내역이 안전하게 보관되며, 거래 내역을 검증하는 과정에서 발생하는 보상으로 새로운 비트코인을 채굴할 수 있습니다.",
      })
      .addFields({
        name: ":ballot_box_with_check:  연관어",
        value:
          "분산 원장(Distributed Ledger), 노드(Node), 블록(Block), 비트코인",
      })
      .addFields({
        name: ":link:  첨부파일 및 링크",
        value: "-",
      });
    await interaction.reply({ embeds: [embed] });
  }
  //// C ////
  if (commandName === "CBDC") {
    const embed = new MessageEmbed()
      .setTitle("CBDC")
      .setURL(
        "https://www.notion.so/art-aslan-research-team/CBDC-3935b7147f3345e29d586f6b6beb2ac0"
      )
      .addFields({
        name: ":question:  뜻풀이 및 해석",
        value:
          "CBDC는 'Central Bank Digital Currency'의 약어로, 중앙은행 디지털 화폐를 의미합니다. 디지털 화폐는 기존의 물리적인 화폐와 달리 전자적인 형태로 발행되며, CBDC는 이러한 디지털 화폐 중 중앙은행에서 발행된 것을 의미합니다. CBDC는 중앙은행이 발행한 전자적인 화폐이기 때문에, 중앙은행의 신뢰성과 안정성을 기반으로 하며, 일부 국가에서는 현금 대신 CBDC를 사용하여 결제하는 추세입니다",
      })
      .setColor(0xffff)
      .setThumbnail("https://i.ibb.co/gD8JH3j/Block-Note.png")
      .addFields({
        name: ":pencil:  예문",
        value:
          "2020년 BIS가 실시한 조사에 따르면 65개 중앙은행 중 CBDC에 대한 연구를 진행하고 있다고 응답한 비율은 86%가 된다.",
      })
      .addFields({
        name: ":ballot_box_with_check:  연관어",
        value: "암호화폐",
      })
      .addFields({
        name: ":link:  https://www.kci.go.kr/kciportal/ci/sereArticleSearch/ciSereArtiView.kci?sereArticleSearchBean.artiId=ART002840417",
        value: "-",
      });
    await interaction.reply({ embeds: [embed] });
  }
  if (commandName === "Coin") {
    const embed = new MessageEmbed()
      .setTitle("Coin")
      .setURL(
        "https://www.notion.so/art-aslan-research-team/Coin-b60142ae2bf14d12a9512b2156a63158"
      )
      .addFields({
        name: ":question:  뜻풀이 및 해석",
        value:
          "Coin (코인)은 암호화폐의 한 종류로, 블록체인 기술을 기반으로 전자적으로 생성되고, 분산원장에 기록되는 디지털 자산입니다. 대표적인 코인으로는 비트코인(Bitcoin)이 있습니다. 코인은 암호화폐의 원형으로, 전 세계적으로 인기가 있는 비트코인을 비롯하여, 이더리움(Ethereum), 리플(Ripple), 도지코인(Doge) 등 다양한 종류가 있습니다. 코인은 대부분 거래소에서 거래가 가능하며, 이를 통해 투자 등 다양한 목적으로 사용됩니다.",
      })
      .setColor(0xffff)
      .setThumbnail("https://i.ibb.co/gD8JH3j/Block-Note.png")
      .addFields({
        name: ":pencil:  예문",
        value: "Coin의 가치 변동성 등 위험을 충분히 인지한 후 투자를 해야한다.",
      })
      .addFields({
        name: ":ballot_box_with_check:  연관어",
        value: "암호화폐, 블록체인, 분산원장, 비트코인",
      })
      .addFields({
        name: ":link:  https://www.kci.go.kr/kciportal/ci/sereArticleSearch/ciSereArtiView.kci?sereArticleSearchBean.artiId=ART002840417",
        value: "-",
      });
    await interaction.reply({ embeds: [embed] });
  }
  //// D ////
  //// E ////
  //// F ////
  //// G ////
  //// H ////
  //// I ////
  //// J ////
  //// K ////
  //// L ////
  //// M ////
  //// N ////
  //// O ////
  //// P ////
  //// Q ////
  //// R ////
  //// S ////
  //// T ////
  //// U ////
  //// V ////
  //// W ////
  //// X ////
  //// Y ////
  //// Z ////
});

// 주사위 게임 & 가위바위보
client.on("message", async (message) => {
  if (message.content === "주사위") {
    dice_list = [
      ":game_die: :one: ",
      ":game_die: :two: ",
      ":game_die: :three: ",
      ":game_die: :four: ",
      ":game_die: :five: ",
      ":game_die: :six: ",
    ];
    random_Num = Math.round(Math.random() * 5);
    await message.channel.send(dice_list[random_Num]);
  }
});

client.login(token);
