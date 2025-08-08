import {Post} from '../models/post.model';
import {PostCategory} from '../models/post-category.enum';


export const KOTLIN_POST_DO_DONT: Post = {
  id: 9,
  title: 'Kotlin Coroutines - Do\'s and Don\'ts',
  content: "<!DOCTYPE html>\n" +
    "<html lang=\"de\">\n" +
    "<head>\n" +
    "    <meta charset=\"UTF-8\">\n" +
    "    <title>Kotlin Coroutines im Spring Boot Backend – Best Practices & Stolperfallen</title>\n" +
    "    <meta name=\"description\" content=\"Wie man Kotlin Coroutines effektiv im Spring Boot Backend für API-Schnittstellen einsetzt. Typische Fehler, Lösungen und Best Practices.\">\n" +
    "    <style>\n" +
    "        body {\n" +
    "            font-family: Arial, sans-serif;\n" +
    "            line-height: 1.6;\n" +
    "            max-width: 800px;\n" +
    "            margin: 2rem auto;\n" +
    "            padding: 0 1rem;\n" +
    "        }\n" +
    "        h1, h2, h3 {\n" +
    "            color: #2c3e50;\n" +
    "        }\n" +
    "        code {\n" +
    "            background-color: #f4f4f4;\n" +
    "            padding: 2px 4px;\n" +
    "            border-radius: 4px;\n" +
    "        }\n" +
    "        pre {\n" +
    "            background: #f4f4f4;\n" +
    "            padding: 1rem;\n" +
    "            overflow-x: auto;\n" +
    "        }\n" +
    "    </style>\n" +
    "</head>\n" +
    "<body>\n" +
    "    <h1>Kotlin Coroutines im Spring Boot Backend</h1>\n" +
    "    <p><strong>Wie du deine APIs nebenläufig, reaktiv und sauber gestaltest – inklusive typischer Fehlerquellen und Best Practices.</strong></p>\n" +
    "\n" +
    "    <h2>Warum Kotlin Coroutines?</h2>\n" +
    "    <p>Coroutines ermöglichen eine elegante und performante Art, asynchrone und nebenläufige Logik zu schreiben – lesbar wie synchroner Code, aber intern effizient und nicht-blockierend. Gerade in Microservices und modernen API-Backends mit vielen I/O-Operationen ist das ein enormer Vorteil.</p>\n" +
    "\n" +
    "    <h2>Typische Bibliotheken im Spring-Kotlin-Stack</h2>\n" +
    "    <ul>\n" +
    "        <li><strong>Spring WebFlux</strong> – Für reaktive, non-blocking Web-APIs</li>\n" +
    "        <li><strong>spring-boot-starter-data-r2dbc</strong> – Reaktive Datenbankzugriffe</li>\n" +
    "        <li><strong>kotlinx-coroutines-core</strong> – Basis-Coroutine-Bibliothek</li>\n" +
    "        <li><strong>kotlinx-coroutines-reactor</strong> – Brücke zwischen Reactor und Coroutines</li>\n" +
    "        <li><strong>jackson-module-kotlin</strong> – Für JSON + Kotlin-Kompatibilität</li>\n" +
    "    </ul>\n" +
    "\n" +
    "    <h2>Typische Fehler und wie du sie vermeidest</h2>\n" +
    "\n" +
    "    <h3>❌ Coroutines im klassischen Spring MVC</h3>\n" +
    "    <p>MVC ist blocking – <code>suspend</code>-Funktionen bringen dort nichts. Nutze <strong>WebFlux</strong> für echte Coroutine-Unterstützung.</p>\n" +
    "\n" +
    "    <h3>❌ Unkontrolliertes Vermischen von Reactor und Coroutines</h3>\n" +
    "    <p><code>Mono.awaitSingle()</code> oder <code>Flow.asFlux()</code> ohne Scope-Verständnis kann fehleranfällig sein. Konvertiere bewusst und vermeide Wildwuchs.</p>\n" +
    "\n" +
    "    <h3>❌ Blocking-JPA mit suspend fun</h3>\n" +
    "    <p><code>JpaRepository</code> ist nicht reaktiv. Verwende stattdessen <code>R2dbcRepository</code> oder manuelle Datenbankzugriffe mit <code>Coroutine</code>-Support.</p>\n" +
    "\n" +
    "    <h3>❌ Blocking innerhalb von Coroutines</h3>\n" +
    "    <p>Kein <code>Thread.sleep()</code>, kein JDBC direkt. Verwende <code>delay()</code> oder lagere Blockierendes in <code>withContext(Dispatchers.IO)</code> aus.</p>\n" +
    "\n" +
    "    <h3>❌ Fehlende Fehler- und Timeout-Behandlung</h3>\n" +
    "    <pre><code>try {\n" +
    "    withTimeout(5000) {\n" +
    "        service.loadData()\n" +
    "    }\n" +
    "} catch (e: TimeoutCancellationException) {\n" +
    "    // Fehler behandeln\n" +
    "}</code></pre>\n" +
    "\n" +
    "    <h3>❌ Kein strukturiertes Coroutine-Management</h3>\n" +
    "    <p><code>GlobalScope</code> vermeiden! Verwende eigene Scopes mit kontrolliertem Lifecycle, z. B. über <code>@Service</code>-Bean mit <code>CoroutineScope</code>.</p>\n" +
    "\n" +
    "    <h2>Best Practices für Coroutines im Spring Boot Backend</h2>\n" +
    "    <ul>\n" +
    "        <li>Nutze <code>suspend fun</code> im Controller – aber nur mit WebFlux</li>\n" +
    "        <li>Für Streams: <code>Flow&lt;T&gt;</code> statt Listen</li>\n" +
    "        <li>Fehler global mit <code>@ControllerAdvice</code> behandeln</li>\n" +
    "        <li>Adapter-Pattern für Blocking zu Non-Blocking-Übergänge</li>\n" +
    "        <li>Nutze <code>kotlinx-coroutines-debug</code> während der Entwicklung</li>\n" +
    "        <li>APIs klar dokumentieren (Swagger/OpenAPI), besonders für <code>Flow</code>-basierte Streams</li>\n" +
    "    </ul>\n" +
    "\n" +
    "    <h2>Fazit</h2>\n" +
    "    <p>Kotlin Coroutines sind eine mächtige Ergänzung zu Spring Boot, wenn man sie richtig einsetzt. WebFlux, strukturierte Nebenläufigkeit und ein durchdachter Architekturansatz sind dabei entscheidend. Vermeide typische Fehler und nutze die Vorteile von Coroutines, um moderne, performante und saubere APIs zu bauen.</p>\n" +
    "</body>\n" +
    "</html>\n"
  ,
  //heute 16.07.2025
  createdAt: new Date(2025, 6, 16),
  imageUrls: ['https://picsum.photos/seed/16/600/300'],
  category: PostCategory.DEV,
  isPrivate: false

}
