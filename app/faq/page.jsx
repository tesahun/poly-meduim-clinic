"use client";

import Accord from "@components/Accord";
import { useState } from "react";

const Asked = () => {
  const [list, setList] = useState([
    {
      question: "የመቀመጫ/የፊንጢጣ ኪንታሮት ምንድነው ?",
      answer:
        "በፊንጢጣ አካባቢ የሚገኙ የደም ቧንቧዎች ሲያብጡ የሚፈጠር በሽታ ሲሆን ይህ ችግር ከፍተኛ የሆነ ህመምና ስቃይ ያስከትላል። ነገር ግን በህክምና ክትትል ሊድን ይችላል።",
    },
    {
      question: "የመቀመጫ/የፊንጢጣ ኪንታሮት በምን ሊከሰት ይችላል ?",
      answer:
        "የፊንጢጣ ኪንታሮት በብዙ መንገዶች ሊከሰት ይችላል። እነሱም የሆድ ድርቀት፣ በርግዝና ግዜ፣ ከመጠን በላይ ፍጥነት፣ በዘር ሃረግ...",
    },
    {
      question: "የመቀመጫ/የፊንጢጣ ኪንታሮት ምልክቶች ?",
      answer:
        "ሕመም የሌለው ከፊንጢጣ የሚፈስ ደማቅ ቀይ ደም፣ በፊንጢጣ አካባቢ ማሳከክ፣ በፊንጢጣ አካባቢ የህመም ስሜት መኖር፣ ከፊንጢጣ የወጣ ሥጋ መሳይ እባጭ",
    },
    {
      question: "ሀኪም ጋር መሄድ ያለብኝ መቼ ነው ?",
      answer:
        "በ ፊንጢጣ አካባቢ ከፍተኛ ህመም የሚሰማዎ ከሆነ፣ የደም መፍሰስ ካለው፣ በቤት ውስጥ ህክምና ሊድን ካልቻለ በአስቸኳይ ወደ ሃኪም ሄደው የህክምና ክትትል ማድረግ ይኖርቦታል!",
    },

    {
      question: "ሀዋሳ ሀይቅ ፖሊ ክሊኒክ ለ ፊንጢጣ ኪንታሮት ምን አይነት ህክምና ይሰጣል  ?",
      answer: "በ ሀዋሳ ሀይቅ ፖሊ ክሊኒክ የፊንጢጣ ኪንታሮትን ያለ ቀዶ ህክምና አክሞ ማዳን ህክምና እንሰጣለን።",
    },
    {
      question: "ታም-ዳግ የጥርስ ህክምና ምን ምን ህክምና ይሰጣል?",
      answer:
        "የተቦረቦረ ጥርስ መሙላት፣ የተበላሸ ጥርስ ይነቅላል፣ ብሬስ ማሰር፣ ነጭ እና ወርቅ ጥርስ መንቀል፣ የቆሸሸ ጥርስ ማጽዳት፣ የጥርስ ስር ህክምና፣ የመንጋጋ ጥርስ መንቀል፣ የመንጋጋ ስብራትን መጠገን፣ የአፍ ጠረንን አክሞ ማስወገድ።",
    },
  ]);

  return (
    <div>
      <div className="h-screen w-full flex items-center justify-center">
        <div>
          {list.map((item, key) => (
            <Accord key={key} datas={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Asked;