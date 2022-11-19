(async () => {
    const mRNA = {
        "A": {
            "A": {
                "A": "Lysine",
                "U": "Asparagine",
                "C": "Asparagine",
                "G": "Lysine",
            },
            "U": {
                "A": "Isoleucine",
                "U": "Isoleucine",
                "C": "Isoleucine",
                "G": "Methionine (START)",
            },
            "C": {
                "A": "Threonine",
                "U": "Threonine",
                "C": "Threonine",
                "G": "Threonine",
            },
            "G": {
                "A": "Arginine",
                "U": "Serine",
                "C": "Serine",
                "G": "Arginine",
            },
        },
        "U": {
            "A": {
                "A": "Ochre (STOP)",
                "U": "Tyrosine",
                "C": "Tyrosine",
                "G": "Amber (STOP)",
            },
            "U": {
                "A": "Leucine",
                "U": "Phenylalanine",
                "C": "Phenylalanine",
                "G": "Leucine",
            },
            "C": {
                "A": "Serine",
                "U": "Serine",
                "C": "Serine",
                "G": "Serine",
            },
            "G": {
                "A": "Opal (STOP)",
                "U": "Cysteine",
                "C": "Cysteine",
                "G": "Tryptophan",
            },
        },
        "C": {
            "A": {
                "A": "Glutamine",
                "U": "Histidine",
                "C": "Histidine",
                "G": "Glutamine",
            },
            "U": {
                "A": "Leucine",
                "U": "Leucine",
                "C": "Leucine",
                "G": "Leucine",
            },
            "C": {
                "A": "Proline",
                "U": "Proline",
                "C": "Proline",
                "G": "Proline",
            },
            "G": {
                "A": "Arginine",
                "U": "Arginine",
                "C": "Arginine",
                "G": "Arginine",
            },
        },
        "G": {
            "A": {
                "A": "Glutamic Acid",
                "U": "Aspartic Acid",
                "C": "Aspartic Acid",
                "G": "Glutamic Acid",
            },
            "U": {
                "A": "Valine",
                "U": "Valine",
                "C": "Valine",
                "G": "Valine",
            },
            "C": {
                "A": "Alanine",
                "U": "Alanine",
                "C": "Alanine",
                "G": "Alanine",
            },
            "G": {
                "A": "Glycine",
                "U": "Glycine",
                "C": "Glycine",
                "G": "Glycine",
            },
        },
    };
    const YOUR_SEQUENCE =
        "A T A C G A A C T C G C G A C C G C G G C G A T A C G G T T T A C G G C C A T C A G G C A A T A C C G C T A G C G G G C C T A T A C G C T A C T A C T C A T G G A A C G G G T A G G C G T A T A C C G A C T T T C C G A T A C A A T G G A C C C G G T A T G C G A T C T C C T A C C G C T C C G C C G T C G A C A A T A C C A A T T A A T G A T C G A C C C C C A T G A A A G G G G G G G G G T A T A T G C G C T C C G A A G C G T T A C G A C T G A C A A T A T A G C T T T T G A C G G G G A A C C C C T A C G T G A G G T T T C A C A G G C C C C C C G C C G T T A A A T A T G C T A G C T T T G G G A A A C C C C C G A A G C G A A G G C T T G T T C C G G A C C A T T A C G G G C C A T A T G A C G A A G C T T A G C A A T T T G A A G T G A C T T A C G T G A A A G C T T T C C G G G A A C G C G C G C G C C C C T T A T T A G A A T C T T G T C A C C A T C A T C A T C A T T A C A T G C A G G A C T A T A T G C G A T T T T T C G G A A G G T A T A T C G G T G A G T C G T G C G A T G A C G T G G T G T C A C G T A G T A G T T T G C G A A C G T A G T G C C G T G C C A T A G C A T G A C A C G A C T T A G T A G T A G G G G G G T G A C G T A G T A C G T A G T A G T G G T G T G T G A G A C T G T A C A C A C A C A C G T A G T A G A C G T A C G T T T T A A A G A C C C C G T A C G T A C G T T G T G A C A C A C T T T A A A G A T A G A C G T A A C G C C C C A T T G G T G T G A C G A";
    const sequence =
        (YOUR_SEQUENCE).replaceAll("A", "U").replaceAll("T", "A").replaceAll(
            "C",
            "H",
        ).replaceAll("G", "C").replaceAll("H", "G") +
        (YOUR_SEQUENCE.charAt(-1) != " " ? " " : "");
    let tempString = sequence;
    let final = "";
    console.log(
        "Before the process starts, please make sure that you've inputted your sequence in the YOUR_SEQUENCE variable. To begin, input 1 and press enter. If the process is taking over 15 seconds, please stop the process and check your sequence. (Only put DNA sequences in the variable, NOT mRNA, and make sure there is a space between each letter.)",
    );
    if (parseInt(await prompt("=")) == 1) {
        let forceBreak = false;
        setTimeout(() => {
            if (!forceBreak) {
                forceBreak = true;
                console.log(
                    "Process taking longer than 15 seconds. Please check your sequence for errors.",
                );
            }
        }, 15000);
        while (!forceBreak) {
            if (tempString.search("A U G") == -1) {
                final += tempString;
                forceBreak = true;
                break;
            }
            let preSequence = "";
            for (let i = tempString.search("A U G") + 1; i--;) {
                preSequence += tempString.charAt(i - 1);
            }
            tempString = tempString.replace(
                preSequence.split("").reverse().join(""),
                "",
            );
            final += preSequence.split("").reverse().join("") + "- ";
            let regex = /([A-Z] [A-Z] [A-Z] )/g,
                list = tempString.split(regex);
            for (let i = list.length; i--;) {
                "" === list[i] && list.splice(list.indexOf(""), 1);
            }
            let e = "";
            list.every((l) => {
                e += ("A U G " == l
                    ? (!e.includes("(START)") ? "(START) " : "") + l
                    : "U A A " == l || "U A G " == l || "U G A " == l
                        ? l + "(STOP) "
                        : l) + "- ";
                if (e.includes("(STOP)")) {
                    list.length = list.indexOf(l) + 1;
                    tempString = tempString.replace(list.join(""), "");
                    return false;
                } else {
                    return true;
                }
            });
            final += e;
        }
        if (final.match(/(START)/g).length != final.match(/(STOP)/g).length) {
            console.log("Failed! Incorrect input.");
        } else {
            console.log("");
            console.log("Total proteins:", final.match(/(START)/g).length);
            console.log("Final sequence:", final);
            let proteins = final.split("(START) "),
                index = 0,
                aminoAcids = [];
            if (final.charAt(0) != "(") {
                proteins.splice(0, 1);
            }
            proteins.forEach((i) => {
                aminoAcids[index] = i.split(" (STOP) ")[0].replaceAll(" ", "")
                    .split(
                        "-",
                    );
                index++;
            });
            aminoAcids.forEach((i) => {
                let codonsIndex = 0;
                i.forEach((e) => {
                    i[codonsIndex] =
                        mRNA[e.charAt(0)][e.charAt(1)][e.charAt(2)];
                    codonsIndex++;
                });
            });
            while (1) {
                console.log("");
                console.log("Please enter the index of the protein.");
                const protein = parseInt(await prompt("=")) - 1;
                console.log("");
                console.log(
                    "Please enter the index of the amino acid. (0 is last, based on array index - 1)",
                );
                const aminoAcid = parseInt(await prompt("=")) - 1;
                console.clear();
                console.log(
                    "=> Amino Acid #" + (aminoAcid + 1) + " for protein #" +
                    (protein + 1) + ": " +
                    aminoAcids[protein].at(aminoAcid),
                );
            }
        }
    } else {
        console.log("Canceled.");
    }
})();
