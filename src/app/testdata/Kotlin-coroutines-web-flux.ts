import {Post} from '../models/post.model';
import {PostCategory} from '../models/post-category.enum';

export const KOTLIN_COROUTINES_WEBFLUX: Post = {
  id: 10,
  title: 'Kotlin Coroutines im Spring Boot Backend – Best Practices & Stolperfallen mit Webflux',
  content: "<!DOCTYPE html>\n" +
    "<html lang=\"de\">\n" +
    "<head>\n" +
    "    <meta charset=\"UTF-8\">\n" +
    "    <meta name=\"description\" content=\"Wie man Kotlin Coroutines effektiv im Spring Boot Backend für API-Schnittstellen einsetzt. Typische Fehler, Lösungen und Best Practices.\">\n" +
    "<hr>\n" +
    "<p>Kotlin Coroutines haben sich als mächtiges Werkzeug für asynchrone und nebenläufige Programmierung in modernen Serveranwendungen etabliert. Besonders mit <strong>Spring WebFlux</strong> lassen sich hoch-performante, non-blocking REST-APIs entwickeln. Doch Coroutines sind kein Selbstläufer – falsch eingesetzt können sie sogar mehr schaden als nützen.</p>\n" +
    "<p>In diesem Beitrag zeige ich, <strong>wie man Coroutines in Spring Boot NICHT verwenden sollte</strong> – und wie es richtig geht!</p>\n" +
    "<hr>\n" +
    "<h2 id=\"-wie-man-coroutines-nicht-verwenden-sollte\">❌ Wie man Coroutines <em>nicht</em> verwenden sollte</h2>\n" +
    "<h3 id=\"1-suspend-fun-im-klassischen-spring-mvc-controller-spring-boot-starter-web-\">1. <code>suspend fun</code> im klassischen Spring MVC-Controller (<code>spring-boot-starter-web</code>)</h3>\n" +
    "<pre><code class=\"lang-kotlin\"><span class=\"hljs-meta\">@RestController</span>\n" +
    "<span class=\"hljs-class\"><span class=\"hljs-keyword\">class</span> <span class=\"hljs-title\">UserController</span> </span>{\n" +
    "    <span class=\"hljs-meta\">@GetMapping(<span class=\"hljs-meta-string\">\"/fail\"</span>)</span>\n" +
    "    suspend <span class=\"hljs-function\"><span class=\"hljs-keyword\">fun</span> <span class=\"hljs-title\">thisWillNotWork</span><span class=\"hljs-params\">()</span></span>: String {\n" +
    "        <span class=\"hljs-comment\">// ...</span>\n" +
    "        <span class=\"hljs-keyword\">return</span> <span class=\"hljs-string\">\"nope\"</span>\n" +
    "    }\n" +
    "}\n" +
    "</code></pre>\n" +
    "<p><strong>Warum ist das falsch?</strong>\n" +
    "Spring MVC (also das klassische <code>spring-boot-starter-web</code>) kennt keine Coroutines.\n" +
    "Eine als <code>suspend fun</code> deklarierte Methode bringt hier keinerlei Vorteile – sie wird von Spring einfach wie eine normale Funktion behandelt. Es gibt keine Non-Blocking-Execution und keine bessere Performance.</p>\n" +
    "<p><strong>Merke:</strong></p>\n" +
    "<blockquote>\n" +
    "<p><code>suspend fun</code> macht nur in einer reaktiven Umgebung wie <strong>Spring WebFlux</strong> (nicht MVC!) Sinn.</p>\n" +
    "</blockquote>\n" +
    "<hr>\n" +
    "<h3 id=\"2-globalscope-oder-runblocking-im-webflux-controller\">2. <code>GlobalScope</code> oder <code>runBlocking</code> im WebFlux-Controller</h3>\n" +
    "<pre><code class=\"lang-kotlin\"><span class=\"hljs-meta\">@RestController</span>\n" +
    "<span class=\"hljs-class\"><span class=\"hljs-keyword\">class</span> <span class=\"hljs-title\">BadController</span> </span>{\n" +
    "    <span class=\"hljs-meta\">@GetMapping(<span class=\"hljs-meta-string\">\"/bad\"</span>)</span>\n" +
    "    <span class=\"hljs-function\"><span class=\"hljs-keyword\">fun</span> <span class=\"hljs-title\">bad</span><span class=\"hljs-params\">()</span></span>: String {\n" +
    "        runBlocking {\n" +
    "            <span class=\"hljs-comment\">// Das blockiert den Netty-Thread!</span>\n" +
    "            doSomeSuspendWork()\n" +
    "        }\n" +
    "        <span class=\"hljs-keyword\">return</span> <span class=\"hljs-string\">\"nope\"</span>\n" +
    "    }\n" +
    "}\n" +
    "</code></pre>\n" +
    "<p><strong>Warum ist das falsch?</strong>\n" +
    "<code>runBlocking</code> blockiert den aktuellen Thread – im Fall von WebFlux ist das meistens ein Netty-Event-Loop-Thread. Dadurch werden die Vorteile der reaktiven Plattform komplett zunichte gemacht.\n" +
    "Gleiches gilt für <code>GlobalScope</code>: Coroutines, die so gestartet werden, sind nicht an das Lifecycle-Management von Spring oder Requests gebunden – das führt schnell zu Memory-Leaks und schwer auffindbaren Bugs.</p>\n" +
    "<p><strong>Merke:</strong></p>\n" +
    "<blockquote>\n" +
    "<p>Keine Blockierenden Konstrukte (<code>runBlocking</code>) und kein <code>GlobalScope</code> im WebFlux-Kontext!</p>\n" +
    "</blockquote>\n" +
    "<hr>\n" +
    "<h2 id=\"-wie-man-es-richtig-macht\">✅ Wie man es <strong>richtig</strong> macht</h2>\n" +
    "<h3 id=\"1-spring-webflux-und-suspend-fun-im-controller-\">1. <strong>Spring WebFlux und <code>suspend fun</code> im Controller</strong></h3>\n" +
    "<p>Setze auf das <strong>WebFlux-Modul</strong> (<code>spring-boot-starter-webflux</code>). Hier erkennt Spring automatisch, wenn eine Controller-Methode als <code>suspend fun</code> deklariert ist, und führt sie non-blocking aus.</p>\n" +
    "<pre><code class=\"lang-kotlin\"><span class=\"hljs-meta\">@RestController</span>\n" +
    "<span class=\"hljs-meta\">@RequestMapping(<span class=\"hljs-meta-string\">\"/api/users\"</span>)</span>\n" +
    "<span class=\"hljs-class\"><span class=\"hljs-keyword\">class</span> <span class=\"hljs-title\">UserController</span></span>(\n" +
    "    <span class=\"hljs-keyword\">private</span> <span class=\"hljs-keyword\">val</span> userService: UserService\n" +
    ") {\n" +
    "    <span class=\"hljs-meta\">@GetMapping(<span class=\"hljs-meta-string\">\"/{id}\"</span>)</span>\n" +
    "    suspend <span class=\"hljs-function\"><span class=\"hljs-keyword\">fun</span> <span class=\"hljs-title\">getUser</span><span class=\"hljs-params\">(<span class=\"hljs-meta\">@PathVariable</span> id: <span class=\"hljs-type\">Long</span>)</span></span>: UserDto? {\n" +
    "        <span class=\"hljs-keyword\">return</span> userService.findUserById(id)\n" +
    "    }\n" +
    "\n" +
    "    <span class=\"hljs-meta\">@GetMapping</span>\n" +
    "    <span class=\"hljs-function\"><span class=\"hljs-keyword\">fun</span> <span class=\"hljs-title\">getAllUsers</span><span class=\"hljs-params\">()</span></span>: Flow&lt;UserDto&gt; = userService.findAllUsers()\n" +
    "}\n" +
    "</code></pre>\n" +
    "<p><strong>Das bringt Vorteile:</strong></p>\n" +
    "<ul>\n" +
    "<li>Non-Blocking Execution out of the box</li>\n" +
    "<li>Klare, einfache Syntax</li>\n" +
    "<li>Volle Coroutine-Power – z.B. <code>Flow</code> für Streaming-APIs</li>\n" +
    "</ul>\n" +
    "<hr>\n" +
    "<h3 id=\"2-blocking-operationen-vermeiden-\">2. <strong>Blocking-Operationen vermeiden</strong></h3>\n" +
    "<p>Alle aufgerufenen Services und Datenbankzugriffe sollten <em>ebenfalls</em> non-blocking sein. Für Datenbanken bietet sich z.B. <strong>Spring Data R2DBC</strong> mit Coroutine-Support an.</p>\n" +
    "<pre><code class=\"lang-kotlin\"><span class=\"hljs-class\"><span class=\"hljs-keyword\">interface</span> <span class=\"hljs-title\">UserRepository</span> : <span class=\"hljs-type\">CoroutineCrudRepository</span>&lt;<span class=\"hljs-type\">UserEntity, Long</span>&gt;</span>\n" +
    "</code></pre>\n" +
    "<p>Falls du doch mal Legacy-Blocking-Code hast, lagere ihn sauber aus:</p>\n" +
    "<pre><code class=\"lang-kotlin\">suspend <span class=\"hljs-function\"><span class=\"hljs-keyword\">fun</span> <span class=\"hljs-title\">blockingCall</span></span>(): String = withContext(Dispatchers.IO) {\n" +
    "    legacyBlockingService.doStuff()\n" +
    "}\n" +
    "</code></pre>\n" +
    "<hr>\n" +
    "<h3 id=\"3-kein-runblocking-kein-globalscope-sondern-strukturierte-nebenl-ufigkeit-\">3. <strong>Kein runBlocking, kein GlobalScope, sondern strukturierte Nebenläufigkeit</strong></h3>\n" +
    "<p>Spring WebFlux und Coroutines übernehmen das Lifecycle-Management für dich.\n" +
    "Schreibe möglichst alle Methoden als <code>suspend fun</code> und verzichte auf eigenständige Coroutine-Scopes wie <code>GlobalScope</code> oder blockierende Aufrufe wie <code>runBlocking</code>. So bleibt dein Code übersichtlich, skalierbar und leicht wartbar.</p>\n" +
    "<hr>\n" +
    "<h2 id=\"-fazit-\">🚦 <strong>Fazit</strong></h2>\n" +
    "<p>Kotlin Coroutines sind ein Game-Changer – aber nur, wenn die Infrastruktur sie unterstützt!\n" +
    "<strong>Verwende Coroutines nur im passenden Kontext:</strong></p>\n" +
    "<ul>\n" +
    "<li>Setze im Backend auf <strong>Spring WebFlux</strong></li>\n" +
    "<li>Vermeide blockierende Aufrufe und falsches Scoping</li>\n" +
    "<li>Halte dich an strukturierte Nebenläufigkeit</li>\n" +
    "</ul>\n" +
    "<p>So bleibt dein Spring Boot Backend schnell, modern und wartbar.</p>\n" +
    "<hr>\n" +
    "</body>\n" +
    "</html>\n",
  //heute 16.07.2025
  createdAt: new Date(2025, 6, 17),
  imageUrls: ['https://picsum.photos/seed/16/600/300'],
  category: PostCategory.DEV,
  isPrivate: false
}
