from pathlib import Path

from reportlab.lib import colors
from reportlab.lib.enums import TA_LEFT, TA_RIGHT
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import mm
from reportlab.platypus import (
    HRFlowable,
    KeepTogether,
    PageBreak,
    Paragraph,
    SimpleDocTemplate,
    Spacer,
    Table,
    TableStyle,
)


ROOT = Path(__file__).resolve().parents[1]
OUTPUT = ROOT / "public" / "cv" / "dr-srishti-cv.pdf"

NAVY = colors.HexColor("#12304A")
TEAL = colors.HexColor("#147D78")
INK = colors.HexColor("#1D2935")
MUTED = colors.HexColor("#5B6978")
PALE = colors.HexColor("#EAF5F3")
LINE = colors.HexColor("#CCD8DE")


def build_styles():
    base = getSampleStyleSheet()
    return {
        "name": ParagraphStyle(
            "Name",
            parent=base["Title"],
            fontName="Helvetica-Bold",
            fontSize=23,
            leading=27,
            textColor=NAVY,
            spaceAfter=3,
        ),
        "credential": ParagraphStyle(
            "Credential",
            parent=base["Normal"],
            fontName="Helvetica-Bold",
            fontSize=10.5,
            leading=14,
            textColor=TEAL,
        ),
        "contact": ParagraphStyle(
            "Contact",
            parent=base["Normal"],
            fontSize=8.8,
            leading=12,
            textColor=MUTED,
            alignment=TA_RIGHT,
        ),
        "summary": ParagraphStyle(
            "Summary",
            parent=base["BodyText"],
            fontSize=9.2,
            leading=13.5,
            textColor=INK,
            spaceAfter=6,
        ),
        "section": ParagraphStyle(
            "Section",
            parent=base["Heading2"],
            fontName="Helvetica-Bold",
            fontSize=10.5,
            leading=13,
            textColor=NAVY,
            spaceBefore=8,
            spaceAfter=5,
        ),
        "role": ParagraphStyle(
            "Role",
            parent=base["BodyText"],
            fontName="Helvetica-Bold",
            fontSize=9.1,
            leading=12,
            textColor=INK,
        ),
        "meta": ParagraphStyle(
            "Meta",
            parent=base["BodyText"],
            fontSize=8.2,
            leading=11,
            textColor=MUTED,
        ),
        "body": ParagraphStyle(
            "Body",
            parent=base["BodyText"],
            fontSize=8.7,
            leading=12.3,
            textColor=INK,
        ),
        "bullet": ParagraphStyle(
            "Bullet",
            parent=base["BodyText"],
            fontSize=8.6,
            leading=12.2,
            leftIndent=9,
            firstLineIndent=-6,
            bulletIndent=0,
            textColor=INK,
            spaceAfter=2,
        ),
        "publication": ParagraphStyle(
            "Publication",
            parent=base["BodyText"],
            fontSize=8.35,
            leading=11.8,
            leftIndent=12,
            firstLineIndent=-10,
            textColor=INK,
            spaceAfter=6,
        ),
        "tag": ParagraphStyle(
            "Tag",
            parent=base["Normal"],
            fontName="Helvetica-Bold",
            fontSize=7.6,
            leading=9,
            textColor=TEAL,
            alignment=TA_LEFT,
        ),
        "footer": ParagraphStyle(
            "Footer",
            parent=base["Normal"],
            fontSize=7.5,
            leading=9,
            textColor=MUTED,
        ),
    }


STYLES = build_styles()


def section(title):
    return [
        Paragraph(title.upper(), STYLES["section"]),
        HRFlowable(width="100%", thickness=0.7, color=TEAL, spaceAfter=6),
    ]


def appointment(title, organization, dates, detail):
    header = Table(
        [
            [
                Paragraph(title, STYLES["role"]),
                Paragraph(dates, STYLES["meta"]),
            ],
            [Paragraph(organization, STYLES["meta"]), ""],
        ],
        colWidths=[135 * mm, 35 * mm],
    )
    header.setStyle(
        TableStyle(
            [
                ("VALIGN", (0, 0), (-1, -1), "TOP"),
                ("ALIGN", (1, 0), (1, 0), "RIGHT"),
                ("LEFTPADDING", (0, 0), (-1, -1), 0),
                ("RIGHTPADDING", (0, 0), (-1, -1), 0),
                ("TOPPADDING", (0, 0), (-1, -1), 0),
                ("BOTTOMPADDING", (0, 0), (-1, -1), 1),
            ]
        )
    )
    return KeepTogether(
        [
            header,
            Paragraph(f"- {detail}", STYLES["bullet"]),
            Spacer(1, 4),
        ]
    )


def education_row(degree, institution, dates, detail=None):
    detail_text = f"<br/><font color='#5B6978'>{detail}</font>" if detail else ""
    table = Table(
        [
            [
                Paragraph(f"<b>{degree}</b><br/><font color='#5B6978'>{institution}</font>{detail_text}", STYLES["body"]),
                Paragraph(dates, STYLES["meta"]),
            ]
        ],
        colWidths=[135 * mm, 35 * mm],
    )
    table.setStyle(
        TableStyle(
            [
                ("VALIGN", (0, 0), (-1, -1), "TOP"),
                ("ALIGN", (1, 0), (1, 0), "RIGHT"),
                ("LEFTPADDING", (0, 0), (-1, -1), 0),
                ("RIGHTPADDING", (0, 0), (-1, -1), 0),
                ("TOPPADDING", (0, 0), (-1, -1), 1),
                ("BOTTOMPADDING", (0, 0), (-1, -1), 5),
            ]
        )
    )
    return table


def footer(canvas, document):
    canvas.saveState()
    width, _ = A4
    canvas.setStrokeColor(LINE)
    canvas.setLineWidth(0.5)
    canvas.line(20 * mm, 13 * mm, width - 20 * mm, 13 * mm)
    canvas.setFillColor(MUTED)
    canvas.setFont("Helvetica", 7.5)
    canvas.drawString(20 * mm, 8.5 * mm, "Dr. Srishti Mishra | Curriculum Vitae")
    canvas.drawRightString(width - 20 * mm, 8.5 * mm, f"Page {document.page}")
    canvas.restoreState()


def publication(number, citation, status, doi=None):
    doi_text = ""
    if doi:
        doi_text = f" <link href='https://doi.org/{doi}' color='#147D78'>doi:{doi}</link>"
    return Paragraph(
        f"<b>{number}.</b> {citation} "
        f"<font color='#147D78'><b>{status}.</b></font>{doi_text}",
        STYLES["publication"],
    )


def build_cv():
    OUTPUT.parent.mkdir(parents=True, exist_ok=True)
    document = SimpleDocTemplate(
        str(OUTPUT),
        pagesize=A4,
        rightMargin=20 * mm,
        leftMargin=20 * mm,
        topMargin=16 * mm,
        bottomMargin=18 * mm,
        title="Dr. Srishti Mishra - Curriculum Vitae",
        author="Dr. Srishti Mishra",
        subject="Community Medicine, public health, clinical care, research, and medical education",
    )

    header = Table(
        [
            [
                Paragraph("Dr. Srishti Mishra", STYLES["name"]),
                Paragraph("Ahmedabad, Gujarat, India<br/>srshtm97@gmail.com", STYLES["contact"]),
            ],
            [
                Paragraph("MBBS | MD Community Medicine", STYLES["credential"]),
                "",
            ],
        ],
        colWidths=[120 * mm, 50 * mm],
    )
    header.setStyle(
        TableStyle(
            [
                ("VALIGN", (0, 0), (-1, -1), "TOP"),
                ("LEFTPADDING", (0, 0), (-1, -1), 0),
                ("RIGHTPADDING", (0, 0), (-1, -1), 0),
                ("TOPPADDING", (0, 0), (-1, -1), 0),
                ("BOTTOMPADDING", (0, 0), (-1, -1), 0),
            ]
        )
    )

    story = [
        header,
        Spacer(1, 8),
        HRFlowable(width="100%", thickness=2, color=TEAL, spaceAfter=9),
        Paragraph(
            "Community Medicine physician and Senior Resident with completed MD training and experience across clinical care, rural and urban field practice, public health research, community outreach, and undergraduate teaching support. Research interests include geriatric health, maternal and neonatal health, healthcare access, medical student well-being, and community-based service delivery.",
            STYLES["summary"],
        ),
    ]

    story.extend(section("Academic and clinical appointments"))
    story.extend(
        [
            appointment(
                "Senior Resident, Community Medicine",
                "SBKS MIRC, Sumandeep Vidyapeeth",
                "Oct 2026 - Present",
                "Teaching, departmental academic work, field practice supervision, research, and public health programme support.",
            ),
            appointment(
                "Junior Resident, MD Community Medicine",
                "SBKS MIRC, Sumandeep Vidyapeeth",
                "Oct 2023 - Oct 2026",
                "Completed postgraduate training in epidemiology, biostatistics, preventive medicine, public health programmes, field practice, research methodology, seminars, journal clubs, and undergraduate teaching support.",
            ),
            appointment(
                "Clinical Doctor / Medical Officer",
                "Sterling Hospital, Gurukul, Ahmedabad",
                "Aug 2022 - Aug 2023",
                "Provided clinical care, documentation, patient coordination, and emergency response support in a multidisciplinary hospital setting.",
            ),
            appointment(
                "Rotatory Intern",
                "JSS Medical College, Mysore",
                "May 2021 - May 2022",
                "Completed core clinical and allied postings, including COVID-19 care and ACLS/BLS exposure.",
            ),
        ]
    )

    story.extend(section("Education"))
    story.extend(
        [
            education_row(
                "MD Community Medicine",
                "SBKS MIRC, Sumandeep Vidyapeeth",
                "Oct 2023 - Oct 2026",
                "Completed",
            ),
            education_row(
                "MBBS",
                "JSS Medical College, Mysore",
                "Sep 2016 - May 2022",
                "Aggregate: 64.3%",
            ),
            education_row(
                "Class XII",
                "Kendriya Vidyalaya No. 1, Ichhanath, Surat",
                "2015",
                "School Topper | 93.6%",
            ),
            education_row(
                "Class X",
                "Kendriya Vidyalaya No. 1, Ichhanath, Surat",
                "2013",
                "School Topper | 95%",
            ),
        ]
    )

    story.extend(section("Selected field and public health experience"))
    for item in [
        "Organised and participated as a consultant in health camps serving approximately 10,000 people across villages in Waghodia Taluka.",
        "Served as Medical Officer at RHTC Bahadarpur from Dec 2023 to May 2025 and completed Urban Health Centre postings at Kishanwadi and Kothi from Dec 2023 to Feb 2026.",
        "Completed a three-month district health system posting at District Hospital, Chhota Udepur, under CDMO/CDHO supervision from Jun to Aug 2025.",
        "Participated in the Family Adoption Programme through household assessment, counselling, follow-up, and reporting.",
    ]:
        story.append(Paragraph(f"- {item}", STYLES["bullet"]))

    story.append(PageBreak())
    story.extend(section("Peer-reviewed publications and accepted manuscripts"))
    publications = [
        (
            "Jyotsana NJ, Pandit NB, Mishra S, Kumar K, Aevara IS. Healthcare utilisation, routine healthcare follow-up, and financial burden among older adults with chronic illness in western India. <i>Clinical Epidemiology and Global Health</i>. 2026;42:102486.",
            "Published",
            "10.1016/j.cegh.2026.102486",
        ),
        (
            "Rasur S, Parmar PC, Mishra SB, Pandit NB. Exam anxiety and coping strategies among undergraduate medical students: A cross-sectional study. <i>Journal of Education and Health Promotion</i>. 2026.",
            "Accepted",
            "10.4103/jehp.jehp_540_26",
        ),
        (
            "Mishra SB, Chauhan GD, Parmar MA. Healthcare-seeking behavior and associated factors among postmenopausal women in rural and urban areas of eastern Gujarat: A community-based study. <i>Journal of Mid-life Health</i>. 2026.",
            "Accepted",
            "10.4103/jmh.jmh_121_26",
        ),
        (
            "The Power of Community-Based Medical Education: A Case Report on Antenatal Care and Safe Delivery through Student Involvement in FAP. <i>Medical Journal of Dr. D.Y. Patil Vidyapeeth</i>. Manuscript ID: mjdrdypu_900_25; accepted 22 Dec 2025.",
            "Accepted",
            None,
        ),
        (
            "Malu A, Patel NG, Pandit NB, Pandya DJ, Mishra S. Premature birth, poverty and cultural practices: A case report of neonatal mortality from rural-tribal Gujarat, India. <i>Journal of Krishna Institute of Medical Sciences University</i>. 2026;15(1).",
            "Published",
            None,
        ),
        (
            "Mishra SB, Parmar PC, Pandit NB. Importance of Rural Health Training Centre in providing successful antenatal care in a rural setting: A model for community health. <i>Medical Journal Armed Forces India</i>. 2025. Correspondence / Letter to the Editor.",
            "Published",
            "10.1016/j.mjafi.2025.08.002",
        ),
        (
            "Mishra S, Parmar PC, Pandit NB, Jadhav S. Geriatric health care in rural setting: A community-based case report of an older adult with hypertension. <i>International Journal of Community Medicine and Public Health</i>. 2026.",
            "Accepted",
            None,
        ),
    ]
    for index, (citation, status, doi) in enumerate(publications, start=1):
        story.append(publication(index, citation, status, doi))

    story.extend(section("Research contribution highlights"))
    highlights = [
        "Data curation, validation, investigation, and manuscript review for research on healthcare utilisation and financial burden among older adults with chronic illness.",
        "Research on examination anxiety and coping strategies among undergraduate medical students, including a 415-student cross-sectional analysis.",
        "Community-based work on healthcare-seeking behavior, morbidity, and access barriers among postmenopausal women in rural and urban Gujarat.",
        "Case-based public health research spanning antenatal care, neonatal mortality, and comprehensive geriatric assessment in rural settings.",
    ]
    for item in highlights:
        story.append(Paragraph(f"- {item}", STYLES["bullet"]))

    story.extend(section("Core competencies"))
    competency_rows = [
        ["Epidemiology", "Biostatistics", "Research methodology"],
        ["Community diagnosis", "Field practice", "Public health programmes"],
        ["Medical education", "Scientific writing", "Community outreach"],
        ["Maternal and child health", "Geriatric health", "Preventive medicine"],
    ]
    competencies = Table(
        [[Paragraph(cell, STYLES["tag"]) for cell in row] for row in competency_rows],
        colWidths=[56 * mm, 56 * mm, 58 * mm],
        hAlign="LEFT",
    )
    competencies.setStyle(
        TableStyle(
            [
                ("BACKGROUND", (0, 0), (-1, -1), PALE),
                ("BOX", (0, 0), (-1, -1), 0.5, LINE),
                ("INNERGRID", (0, 0), (-1, -1), 0.5, colors.white),
                ("VALIGN", (0, 0), (-1, -1), "MIDDLE"),
                ("LEFTPADDING", (0, 0), (-1, -1), 7),
                ("RIGHTPADDING", (0, 0), (-1, -1), 7),
                ("TOPPADDING", (0, 0), (-1, -1), 6),
                ("BOTTOMPADDING", (0, 0), (-1, -1), 6),
            ]
        )
    )
    story.append(competencies)

    story.extend(section("Certifications and languages"))
    story.append(
        Paragraph(
            "<b>Certifications:</b> Basic Course in Biomedical Research (BCBR); ACLS/BLS.<br/>"
            "<b>Languages:</b> English, Hindi, Gujarati, Kannada.",
            STYLES["body"],
        )
    )

    document.build(story, onFirstPage=footer, onLaterPages=footer)


if __name__ == "__main__":
    build_cv()
    print(OUTPUT)
