#!/usr/bin/env python
# -*- coding: utf-8 -*-
from __future__ import print_function, unicode_literals

import os
from shutil import copyfile

from reportlab.lib.colors import HexColor
from reportlab.lib.enums import TA_CENTER
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import mm
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.platypus import (
    KeepTogether,
    Paragraph,
    SimpleDocTemplate,
    Spacer,
)


ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
OUTPUT_PDF = os.path.join(ROOT, "output", "pdf", "JhonCarlosCastilloAtencio-cv.pdf")
PUBLIC_PDF = os.path.join(ROOT, "public", "pdf", "JhonCarlosCastilloAtencio-cv.pdf")

PRIMARY = HexColor("#008F77")
TEXT = HexColor("#202A28")
MUTED = HexColor("#5B6865")
FONT_REGULAR = "DejaVuSans"
FONT_BOLD = "DejaVuSans-Bold"

pdfmetrics.registerFont(TTFont(FONT_REGULAR, r"C:\Windows\Fonts\DejaVuSans.ttf"))
pdfmetrics.registerFont(TTFont(FONT_BOLD, r"C:\Windows\Fonts\DejaVuSans-Bold.ttf"))
pdfmetrics.registerFontFamily(
    FONT_REGULAR,
    normal=FONT_REGULAR,
    bold=FONT_BOLD,
    italic=FONT_REGULAR,
    boldItalic=FONT_BOLD,
)


def link(url, label):
    return '<link href="{}" color="#455451">{}</link>'.format(url, label)


def build_styles():
    base = getSampleStyleSheet()
    return {
        "name": ParagraphStyle(
            "Name",
            parent=base["Normal"],
            fontName=FONT_BOLD,
            fontSize=28,
            leading=30,
            textColor=TEXT,
            spaceAfter=1.5,
        ),
        "title": ParagraphStyle(
            "Title",
            parent=base["Normal"],
            fontName=FONT_BOLD,
            fontSize=11.5,
            leading=13.5,
            textColor=PRIMARY,
            spaceAfter=3,
        ),
        "contact": ParagraphStyle(
            "Contact",
            parent=base["Normal"],
            fontName=FONT_REGULAR,
            fontSize=7.7,
            leading=9.4,
            textColor=MUTED,
            alignment=TA_CENTER,
            spaceAfter=0,
        ),
        "section": ParagraphStyle(
            "Section",
            parent=base["Normal"],
            fontName=FONT_BOLD,
            fontSize=10.2,
            leading=12,
            textColor=PRIMARY,
            spaceBefore=5,
            spaceAfter=2.5,
        ),
        "body": ParagraphStyle(
            "Body",
            parent=base["Normal"],
            fontName=FONT_REGULAR,
            fontSize=8.35,
            leading=10.55,
            textColor=TEXT,
            spaceAfter=1.6,
        ),
        "entry": ParagraphStyle(
            "Entry",
            parent=base["Normal"],
            fontName=FONT_REGULAR,
            fontSize=8.8,
            leading=10.6,
            textColor=TEXT,
            spaceAfter=0.7,
        ),
        "role": ParagraphStyle(
            "Role",
            parent=base["Normal"],
            fontName=FONT_BOLD,
            fontSize=8.25,
            leading=9.8,
            textColor=MUTED,
            spaceAfter=1.1,
        ),
        "bullet": ParagraphStyle(
            "Bullet",
            parent=base["Normal"],
            fontName=FONT_REGULAR,
            fontSize=8.15,
            leading=10.1,
            leftIndent=8,
            firstLineIndent=-6,
            textColor=TEXT,
            spaceAfter=0.7,
        ),
        "tech": ParagraphStyle(
            "Tech",
            parent=base["Normal"],
            fontName=FONT_REGULAR,
            fontSize=7.75,
            leading=9.5,
            textColor=MUTED,
            spaceAfter=1.2,
        ),
    }


def section_title(text, styles):
    return Paragraph(text.upper(), styles["section"])


def bullet(text, styles):
    return Paragraph("•&nbsp; {}".format(text), styles["bullet"])


def entry(company, period, role, bullets, styles):
    content = [
        Paragraph("<b>{}</b> | {}".format(company, period), styles["entry"]),
        Paragraph(role, styles["role"]),
    ]
    content.extend(bullet(item, styles) for item in bullets)
    content.append(Spacer(1, 1.4))
    return KeepTogether(content)


def project(title, period, descriptor, summary, technologies, styles):
    return KeepTogether(
        [
            Paragraph("<b>{}</b> | {}".format(title, period), styles["entry"]),
            Paragraph(descriptor, styles["role"]),
            Paragraph(summary, styles["body"]),
            Paragraph("<b>Tecnologías:</b> {}".format(technologies), styles["tech"]),
            Spacer(1, 1.1),
        ]
    )


def decorate_page(canvas, doc):
    canvas.saveState()
    canvas.setStrokeColor(PRIMARY)
    canvas.setLineWidth(2)
    canvas.line(15 * mm, 10 * mm, 42 * mm, 10 * mm)
    canvas.restoreState()


def generate_cv():
    for directory in (os.path.dirname(OUTPUT_PDF), os.path.dirname(PUBLIC_PDF)):
        if not os.path.isdir(directory):
            os.makedirs(directory)
    styles = build_styles()

    doc = SimpleDocTemplate(
        OUTPUT_PDF,
        pagesize=A4,
        rightMargin=15 * mm,
        leftMargin=15 * mm,
        topMargin=13 * mm,
        bottomMargin=14 * mm,
        title="CV - Jhon Castillo - Frontend & Mobile Developer",
        author="Jhon Castillo",
        subject="Currículum profesional",
    )

    story = [
        Paragraph("Jhon Castillo", styles["name"]),
        Paragraph(
            "Frontend &amp; Mobile Developer · React · React Native · TypeScript",
            styles["title"],
        ),
        Paragraph(
            "Perú · +51 941 882 754 · "
            + link("mailto:jhoncarloscastilloatencio@gmail.com", "jhoncarloscastilloatencio@gmail.com"),
            styles["contact"],
        ),
        Paragraph(
            link("https://www.linkedin.com/in/jccastilloa", "linkedin.com/in/jccastilloa")
            + " · "
            + link("https://jcastilloa.dhyrium.website", "jcastilloa.dhyrium.website")
            + " · "
            + link("https://github.com/jhonccastilloa", "github.com/jhonccastilloa"),
            styles["contact"],
        ),
        section_title("Perfil", styles),
        Paragraph(
            "Ingeniero de Sistemas y desarrollador Frontend/Mobile con más de 3 años de experiencia profesional "
            "en React Native, React y TypeScript. He participado en más de 14 aplicaciones financieras "
            "para Latinoamérica, implementando funcionalidades transaccionales, seguridad y automatización de "
            "releases para Android/iOS. Complemento mi enfoque con APIs REST, Node.js/Express, PostgreSQL y "
            "despliegues en producción sobre infraestructura self-hosted y servidores VPS, con experiencia práctica "
            "en DigitalOcean, Docker, Nginx, DNS y TLS.",
            styles["body"],
        ),
        section_title("Experiencia profesional", styles),
        entry(
            "Bantotal",
            "Feb 2023 - Actualidad",
            "Desarrollador Mobile · React Native",
            [
                "Desarrollo funcionalidades mobile y frontend en más de 14 aplicaciones financieras para instituciones de Latinoamérica.",
                "Implementé onboarding, autenticación multifactor, biometría, recuperación de credenciales, transferencias, pagos, recargas y depósitos a plazo fijo, cubriendo flujos críticos de acceso y operación bancaria.",
                "Integré SSL pinning, soft token y validaciones de seguridad, además de resolver incidencias y ajustes de compatibilidad Android/iOS.",
                "Participo en releases y automatización con Fastlane, GitLab CI, Firebase Distribution y TestFlight para distribuir y validar versiones Android/iOS.",
            ],
            styles,
        ),
        entry(
            "Desarrollador Frontend & Full Stack independiente",
            "Jul 2023 - Actualidad",
            "Plataforma empresarial de expedientes técnicos · Proyecto para cliente · En producción",
            [
                "Desarrollo y mantengo una plataforma empresarial para gestionar expedientes, tareas, planillas y documentos en producción.",
                "Implementé interfaces operativas, permisos, estado remoto y flujos de composición, foliación, impresión y exportación de PDF para centralizar la operación documental.",
                "Construí el frontend con React, TypeScript y React Query, junto con APIs REST en Node.js/Express y PostgreSQL.",
                "Despliego y mantengo frontend, backend y bases de datos en infraestructura self-hosted y servidores VPS, con experiencia práctica en DigitalOcean.",
                "Realizo despliegues con Docker o directamente en servidor y configuro Nginx como proxy inverso, dominios, DNS y certificados TLS, además de VPN, backups, monitoreo y recuperación de servicios.",
            ],
            styles,
        ),
        entry(
            "Dirección Regional de Educación Puno",
            "2021 - 2022",
            "Practicante en el Área de Informática",
            [
                "Desarrollé sistemas web para consultas, convocatorias y procesamiento de información administrativa, además de brindar soporte a aplicaciones internas.",
            ],
            styles,
        ),
        section_title("Proyectos seleccionados", styles),
        project(
            "DebtMate",
            "2026 - Actualidad",
            "Producto mobile personal · Diseño y desarrollo full stack · Uso personal",
            "Aplicación Android para registrar deudas, consultar balances por contacto y mantener cuentas compartidas. Diseñé la experiencia mobile, la autenticación y una API REST propia con Express, Prisma y OpenAPI.",
            "React Native · TypeScript · React Query · Zustand · Express · Prisma · OpenAPI · Firebase",
            styles,
        ),
        project(
            "Plataforma comercial y de posventa",
            "Oct 2025 - Actualidad",
            "Proyecto colaborativo · Liderazgo técnico · En desarrollo",
            "Defino la arquitectura e implementación de una solución modular para catálogo, inventario, caja, Kardex, órdenes de servicio y garantías, con frontend React y API REST en Express/Prisma.",
            "React · TypeScript · TanStack Query · Express · Prisma · Docker",
            styles,
        ),
        section_title("Tecnologías", styles),
        Paragraph("<b>Frontend:</b> React · TypeScript · JavaScript · HTML · CSS · Angular · Astro", styles["body"]),
        Paragraph("<b>Mobile:</b> React Native · Android · iOS · React Query · Redux · Zustand", styles["body"]),
        Paragraph("<b>Backend y APIs:</b> Node.js · Express · Prisma · PostgreSQL · REST · OpenAPI", styles["body"]),
        Paragraph("<b>Infraestructura y despliegue:</b> VPS · DigitalOcean · Self-hosting · Docker · Nginx · DNS · TLS · WireGuard · Backups · Monitoreo", styles["body"]),
        Paragraph("<b>CI/CD y distribución:</b> Git · Fastlane · GitLab CI · Firebase · TestFlight", styles["body"]),
        section_title("Formación", styles),
        Paragraph(
            "<b>Ingeniero de Sistemas</b> · Universidad Nacional del Altiplano | 2017 - 2022",
            styles["body"],
        ),
    ]

    doc.build(story, onFirstPage=decorate_page)
    copyfile(OUTPUT_PDF, PUBLIC_PDF)


if __name__ == "__main__":
    generate_cv()
    print(OUTPUT_PDF)
    print(PUBLIC_PDF)
